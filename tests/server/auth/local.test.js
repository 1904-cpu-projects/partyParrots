/**
 * @jest-environment node
 */
require('@babel/polyfill');

const request = require('supertest');
const app = require('../../../server/app/index');
const { User } = require('../../../server/db/index');

afterAll(() => User.destroy({ where: { email: 'lamoMclamerson@email.com' } }));

describe('local authentication endpoints', () => {
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
            expect(body.errors.email).toBeTruthy();
            expect(body.errors.email).toBe(
              'A user is already registered to this email.'
            );
            done();
          }
        });
    });
  });

  describe('/login', () => {
    test('it fails if a user is not signed up', done => {
      request(app)
        .put('/auth/local/login')
        .send({
          email: 'notAUser@email.com',
          password: 'wrongPassword',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(401)
        .end((err, { body }) => {
          if (err) {
            done(err);
          } else {
            expect(body).toBeTruthy();
            expect(body.errors).toBeTruthy();
            expect(body.errors.email).toBeTruthy();
            expect(body.errors.email).toBe(
              'No user registered with that email.'
            );
            done();
          }
        });
    });

    test('it throws an error for wrong password', done => {
      request(app)
        .put('/auth/local/login')
        .send({
          email: 'lamoMclamerson@email.com',
          password: 'wrongPassword',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(401)
        .end((err, { body }) => {
          if (err) {
            done(err);
          } else {
            expect(body).toBeTruthy();
            expect(body.errors).toBeTruthy();
            expect(body.errors.password).toBeTruthy();
            expect(body.errors.password).toBe('Invalid password.');
            done();
          }
        });
    });

    test('it sends a user if email and password are correct', done => {
      request(app)
        .put('/auth/local/login')
        .send({
          email: 'lamoMclamerson@email.com',
          password: 'iAmLame',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, { body }) => {
          if (err) {
            done(err);
          } else {
            expect(body).toBeTruthy();
            expect(body.email).toBeTruthy();
            expect(body.email).toBe('lamoMclamerson@email.com');
            expect(body.password).toBeFalsy();
            done();
          }
        });
    });
  });
});
