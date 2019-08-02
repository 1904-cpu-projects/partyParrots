/**
 * @jest-environment node
 */

require('@babel/polyfill');
const request = require('supertest');
const app = require('../../../server/app/index');
const { User, db } = require('../../../server/db/index');

let userId;

beforeAll(() => db.sync({ force: true }));

afterAll(() => User.destroy({ where: { id: userId } }));

describe('local authentication endpoints', function() {
  describe('/signup', () => {
    test('it should send back a new user', done => {
      request(app)
        .post('/auth/local/signup')
        .send({
          firstName: 'lamo',
          lastName: 'mclamerson',
          email: 'lamoMclamerson@email.com',
          password: 'iAmLame',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(res => {
          userId = res.body.id;
        })
        .end((err, { body }) => {
          if (err) {
            done(err);
          } else {
            expect(body).toBeTruthy();
            expect(body.id).toBeTruthy();
            expect(body.email).toBe('lamoMclamerson@email.com');
            done();
          }
        });
    });

    test('it fails for an already existing email', done => {
      request(app)
        .post('/auth/local/signup')
        .send({
          firstName: 'lamo',
          lastName: 'mclamerson',
          email: 'lamoMclamerson@email.com',
          password: 'iAmLame',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(401)
        .end((err, { body }) => {
          if (err) {
            done(err);
          } else {
            expect(body).toBeTruthy();
            expect(body.email).toBeTruthy();
            expect(body.email).toBe(
              'A user is already registered to this email.'
            );
            done();
          }
        });
      //
    });
  });
});
