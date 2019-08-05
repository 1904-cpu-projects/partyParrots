require('@babel/polyfill');

const request = require('supertest');
const app = require('../../../server/app/index');

describe('hello route', function() {
  test('it should send back hi', done => {
    request(app)
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
