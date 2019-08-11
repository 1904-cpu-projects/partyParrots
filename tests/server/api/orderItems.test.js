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
  await Order.destroy({ where: { userId: user.id } });
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
        expect(Array.isArray(res.body.items)).toBeTruthy();
        expect(res.body.items.length).toBe(1);
        expect(res.body.items[0].id).toBe(item.id);
        expect(res.body.items[0].orderId).toBe(order.id);

        await Promise.all([item.destroy(), order.destroy()]);
      } catch (error) {
        throw error;
      }
    });

    test('it creates an order if one does not exist and sends back an array of orderItems', async () => {
      try {
        const res = await server.get('/api/orderItems/').set('cookie', cookie);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.items)).toBeTruthy();
        expect(res.body.items.length).toBe(0);
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
        expect(typeof res.body.item).toBe('object');
        expect(res.body.item.id).toBe(item.id);

        await Promise.all([item.destroy(), order.destroy()]);
      } catch (error) {
        throw error;
      }
    });
  });
});
