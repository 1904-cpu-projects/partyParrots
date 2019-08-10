// test method
require('@babel/polyfill');

const { Beverage, db } = require('../../../server/db/index');

beforeAll(() => db.sync());

let beverage;
beforeEach(async () => {
  beverage = await Beverage.create({
    name: 'TestBev',
    manufacturer: 'TestManufacturer',
    percentAlcohol: 100,
    description: 'Test beverage',
    category: 'Lager',
    price: 3.0,
    size: 12,
    quantity: 50,
  });
});

afterEach(async () => {
  await beverage.destroy();
  beverage = null;
});

afterAll(() => db.close());

describe('custom class methods', () => {
  describe('updateQuantity', () => {
    test('it fails for a bad id', async () => {
      try {
        await Beverage.updateQuantity('e' + beverage.id.slice(1), 'add', 1);
      } catch (error) {
        expect(error.message.startsWith('No beverage with id')).toBeTruthy();
      }
    });

    test('it fails when quantity to subtract is more than available', async () => {
      try {
        await Beverage.updateQuantity(beverage.id, 'subtract', 51);
      } catch (error) {
        expect(error.type).toBe('Quantity');
        expect(error.beverageId).toBe(beverage.id);
        expect(error.quantity).toBe(50);
      }
    });

    test('it returns an updated beverage instance with new lower quantity', async () => {
      try {
        const updatedBev = await Beverage.updateQuantity(
          beverage.id,
          'subtract',
          20
        );
        expect(updatedBev.id).toBe(beverage.id);
        expect(updatedBev.quantity).toBe(30);
      } catch (error) {
        throw error;
      }
    });

    test('it can add to a beverages quantity', async () => {
      try {
        const updatedBev = await Beverage.updateQuantity(beverage.id, 'add', 1);
        expect(updatedBev.id).toBe(beverage.id);
        expect(updatedBev.quantity).toBe(51);
      } catch (error) {
        throw error;
      }
    });
  });
});
