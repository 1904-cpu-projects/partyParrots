require('@babel/polyfill');
const { User, db } = require('../../../server/db/index');

beforeAll(() => db.sync());

let user;
beforeEach(() => {
  user = User.build({
    firstName: 'lamo',
    lastName: 'mclamerson',
    email: 'lamoMclamerson@email.com',
    password: 'iAmLame',
  });
});

afterEach(async () => {
  await user.destroy();
  user = null;
});

describe('custom methods', () => {
  test('toJSON', () => {
    const values = user.toJSON();
    // remove id from values b/c always unique
    const id = values.id;
    delete values.id;
    expect(values.password).toBeUndefined();
    expect(values).toEqual({
      firstName: 'lamo',
      lastName: 'mclamerson',
      email: 'lamoMclamerson@email.com',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png',
    });
    // add id back to values & instance so destroy works
    values.id = id;
  });

  test('hash', async () => {
    try {
      const hash = await User.hash('hi');
      expect(hash).not.toBe('hi');
    } catch (error) {
      throw error;
    }
  });

  test('compare passwords returns an error when passwords are not the same', async () => {
    try {
      await User.comparePasswords('notThePassword', user.password);
    } catch (error) {
      if (error.message !== 'Invalid password.') {
        throw error;
      }
      expect(error.message).toBe('Invalid password.');
      expect(error.subtype).toBe('password');
      expect(error.status).toBe(401);
    }
  });

  test('resolves true for the correct password', async () => {
    try {
      await user.save();
      const areSame = await User.comparePasswords('iAmLame', user.password);
      expect(areSame).toBe(true);
    } catch (error) {
      throw error;
    }
  });

  test('login works for correct credentials', async () => {
    try {
      await user.save();
      const _user = await User.login(user.email, 'iAmLame');
      expect(_user.email).toBe(user.email);
      expect(_user.password).toBe(user.password);
      expect(_user.dataValues).toEqual(user.dataValues);
    } catch (error) {
      throw error;
    }
  });

  test('login fails for incorrect email', async () => {
    try {
      await User.login('kldsjfna@gmail.com', 'iAmLame');
    } catch (error) {
      if (error.message !== 'No user registered with that email.') {
        throw error;
      }
      expect(error.message).toBe('No user registered with that email.');
      expect(error.subtype).toBe('email');
    }
  });

  test('login fails for incorrect password', async () => {
    try {
      await user.save();
      await User.login(user.email, 'wrongPassword');
    } catch (error) {
      if (error.message !== 'Invalid password.') {
        throw error;
      }
      expect(error.message).toBe('Invalid password.');
      expect(error.subtype).toBe('password');
    }
  });
});