/**
 * @jest-environment node
 */
require('@babel/polyfill');

const request = require('supertest');
const app = require('../../../server/app/index');

const server = request(app);

describe('hello route', function() {
  test('it should send back hi', done => {
    server
      .get('/hello')
      .expect(200)
      .end((err, { text }) => {
        if (err) {
          done(err);
        } else {
          expect(text).toBeTruthy();
          expect(text).toBe('hi!');
          done();
        }
      });
  });
});
