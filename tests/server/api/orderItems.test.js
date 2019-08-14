require('@babel/polyfill');

// test routes shielded, get / makes a cart, post adds, get / returns item, put updates item, get /id returns updated item, delete removes item,
const request = require('supertest');
const {
  User,
  Beverage,
  OrderItem,
  Order,
  db,
} = require('../../../server/db/index');
const app = require('../../../server/app/index');

const server = request(app);

let user;
beforeAll(async () => {
  await db.sync();
  user = await User.create({
    firstName: 'test',
    lastName: 'test',
    email: 'tester@email.com',
    password: 'test',
  });
});

afterAll(async () => {
  const order = await Order.findOne({ where: { userId: user.id } });
  await OrderItem.destroy({ where: { orderId: order.id } });
  await order.destroy();
  await user.destroy();
  return db.close();
});

describe('/api/orderItems/', () => {
  let cookie;

  describe('is shielded from logged out clients', () => {
    test('sends status 401 to a logged out client', async () => {
      try {
        const res = await server.get('/api/orderItems/');
        expect(res.status).toBe(401);
      } catch (error) {
        throw error;
      }
    });

    test('lets logged in clients make requests', async () => {
      try {
        const res1 = await server.put('/auth/local/login').send({
          email: 'tester@email.com',
          password: 'test',
        });
        cookie = res1.headers['set-cookie'];

        const res2 = await server.get('/api/orderItems/').set('cookie', cookie);
        expect(res2.status).toBe(200);
      } catch (error) {
        throw error;
      }
    });
  });

  describe('GET / and order middleware', () => {
    test('it finds an order if one exists and sends back an array of orderItems', async () => {
      try {
        await Order.destroy({ where: { userId: user.id } });
        const beverages = await Beverage.findAll({ limit: 1 });
        const order = await Order.create({ userId: user.id, purchased: false });
        const item = await OrderItem.create({
          orderId: order.id,
          beverageId: beverages[0].id,
          purchasePrice: 3.0,
          quantity: 1,
        });

        const res = await server.get('/api/orderItems/').set('cookie', cookie);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBe(1);
        expect(res.body[0].id).toBe(item.id);
        expect(res.body[0].beverage.id).toBeTruthy();
        expect(res.body[0].orderId).toBe(order.id);

        await Promise.all([item.destroy(), order.destroy()]);
      } catch (error) {
        throw error;
      }
    });

    test('it creates an order if one does not exist and sends back an array of orderItems', async () => {
      try {
        const res = await server.get('/api/orderItems/').set('cookie', cookie);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBe(0);
      } catch (error) {
        throw error;
      }
    });
  });

  describe('GET /:id', () => {
    test('it sends a single orderItem', async () => {
      try {
        await Order.destroy({ where: { userId: user.id } });
        const [beverage] = await Beverage.findAll({ limit: 1 });
        const order = await Order.create({ userId: user.id, purchased: false });
        const item = await OrderItem.create({
          orderId: order.id,
          beverageId: beverage.id,
          purchasePrice: 3.0,
          quantity: 1,
        });

        const res = await server
          .get('/api/orderItems/' + item.id)
          .set('cookie', cookie);

        expect(res.status).toBe(200);
        expect(typeof res.body).toBe('object');
        expect(res.body.id).toBe(item.id);
        expect(res.body.beverage.id).toBeTruthy();

        await Promise.all([item.destroy(), order.destroy()]);
      } catch (error) {
        throw error;
      }
    });
  });

  describe('POST /', () => {
    test('it sends an error when requesting to purchase more than available', async () => {
      try {
        const [beverage] = await Beverage.findAll({ limit: 1 });
        const res = await server
          .post('/api/orderItems/')
          .send({
            beverageId: beverage.id,
            purchasePrice: beverage.price,
            quantity: beverage.quantity + 20,
          })
          .set('cookie', cookie)
          .set('Accept', 'application/json');

        expect(res.status).toBe(400);
        expect(res.body.quantity).toBe(beverage.quantity);
      } catch (error) {
        throw error;
      }
    });

    test('it updates a products quantity and creates an orderItem', async () => {
      try {
        let [beverage] = await Beverage.findAll({ limit: 1 });
        const quantity = beverage.quantity;

        const res = await server
          .post('/api/orderItems/')
          .send({
            beverageId: beverage.id,
            purchasePrice: beverage.price,
            quantity: beverage.quantity - 20,
          })
          .set('cookie', cookie)
          .set('Accept', 'application/json');

        expect(res.status).toBe(200);
        expect(res.body).toBeTruthy();
        expect(res.body.quantity).toBe(quantity - 20);
        expect(res.body.beverage).toBeTruthy();
        expect(res.body.beverage.quantity).toBe(20);
      } catch (error) {
        throw error;
      }
    });
  });

  describe('PUT /:id', () => {
    test('it sends an error when requesting to purchase more than available', async () => {
      try {
        const res1 = await server.get('/api/orderItems/').set('cookie', cookie);
        expect(res1.body.length).toBe(1);

        const item = res1.body[0];
        const beverage = await Beverage.findOne({
          where: { id: item.beverageId },
        });

        const res2 = await server
          .put(`/api/orderItems/${item.id}`)
          .send({ quantity: item.quantity + beverage.quantity + 100 })
          .set('Cookie', cookie)
          .set('Accept', 'application/json');

        expect(res2.status).toBe(400);
        expect(res2.body.quantity).toBe(beverage.quantity);
      } catch (error) {
        throw error;
      }
    });

    test('it updates a products quantity and updates an orderItem', async () => {
      try {
        const res1 = await server.get('/api/orderItems/').set('cookie', cookie);
        expect(res1.body.length).toBe(1);

        const item = res1.body[0];
        const beverage = await Beverage.findOne({
          where: { id: item.beverageId },
        });

        const res2 = await server
          .put(`/api/orderItems/${item.id}`)
          .send({ quantity: item.quantity + beverage.quantity - 5 })
          .set('Cookie', cookie)
          .set('Accept', 'application/json');

        expect(res2.status).toBe(200);
        expect(res2.body).toBeTruthy();
        expect(res2.body.beverage).toBeTruthy();
        expect(res2.body.quantity).toBe(item.quantity + beverage.quantity - 5);
        expect(res2.body.beverage.quantity).toBe(5);
      } catch (error) {
        throw error;
      }
    });

    test('it deletes an order item when quantity is 0', async () => {
      try {
        const res1 = await server.get('/api/orderItems/').set('cookie', cookie);
        expect(res1.body.length).toBe(1);

        const item = res1.body[0];

        const res2 = await server
          .put(`/api/orderItems/${item.id}`)
          .send({ quantity: 0 })
          .set('Cookie', cookie)
          .set('Accept', 'application/json');

        expect(res2.status).toBe(204);
      } catch (error) {
        throw error;
      }
    });
  });

  describe('DELETE /:id', () => {
    test('it deletes an orderItem and updates beverage quantity', async () => {
      try {
        const [beverage] = await Beverage.findAll({ limit: 1 });
        const res1 = await server
          .post('/api/orderItems/')
          .send({
            beverageId: beverage.id,
            purchasePrice: beverage.price,
            quantity: beverage.quantity - 20,
          })
          .set('cookie', cookie)
          .set('Accept', 'application/json');

        const res2 = await server
          .delete(`/api/orderItems/${res1.body.id}`)
          .set('cookie', cookie)
          .set('Accept', 'application/json');

        expect(res2.status).toBe(204);
      } catch (error) {
        throw error;
      }
    });
  });
});
