require('@babel/polyfill');

const request = require('supertest');
const app = require('../../../server/app/index');
const { User, db, Beverage } = require('../../../server/db/index');

let beverage = null;

beforeAll(() => {
  return db.sync()
})

beforeEach(async() => {
  beverage = await Beverage.create({
    name: 'TestBev',
    manufacturer: 'TestCompany',
    percentAlcohol: 100,
    description: 'test description',
    category: 'Brown',
    price: 10000000,
    size: 88888888,
    quantity: 3333333,
  })
})

afterEach(async ()=> {
  await beverage.destroy();
})

afterAll(() => db.close())

describe('test beverages get routes', function() {
  test('get/api/beverages should send back all beverages', done => {
    request(app)
      .get('/api/beverages')
      .expect(200)
      .end((err, { body }) => {
        if (err) {
          done(err);
        } else {
          expect(body).toBeTruthy();
          expect(body).toBeInstanceOf(Array);
          if (body.length) {
            body.forEach(beverage => {
              expect(beverage).toBeTruthy();
              expect(beverage.id).toBeTruthy();
            })
          }
          done();
        }
      });
  });
  test ('get/api/beverages/id should send back a single beverage', done => {
    request(app)
      .get(`/api/beverages/${beverage.id}`)
      .expect(200)
      .end((err, { body }) => {
        if (err) {
          done(err);
        } else {
          expect(body).toBeTruthy();
          expect(body).toBeInstanceOf(Object);
          expect(body.id).toEqual(beverage.id);
          done();
        }
      })
  })
});
