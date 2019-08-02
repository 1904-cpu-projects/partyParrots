// need to set jest environment so connect-session-sequelize wont error
/**
 * @jest-environment node
 */
require('@babel/polyfill');
const request = require('supertest');
const app = require('../../../server/app/index');

const server = request(app);

describe('hello route', function() {
  test('it should send back hi', () => {
    server
      .get('/hello')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('hi!');
      })
      .catch(console.error);
  });
});
