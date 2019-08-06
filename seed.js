const { db, Beverage, User } = require('./server/db/index');

const makeUserData = (
  firstName,
  lastName,
  email,
  password,
  isAdmin = false
) => ({ firstName, lastName, email, password, isAdmin });

const makeBeverageData = (
  name,
  manufacturer,
  percentAlcohol,
  description,
  category,
  price,
  size,
  quantity
// eslint-disable-next-line max-params
) => ({
  name,
  manufacturer,
  percentAlcohol,
  description,
  category,
  price,
  size,
  quantity,
});

const usersData = [
  makeUserData('Justin', 'Cook', 'justin@email.com', 'justinsPassword'),
  makeUserData('Nick', 'Regoli', 'nick@email.com', 'nicksPassword'),
  makeUserData(
    'Stephanie',
    'Stampher',
    'stephanie@email.com',
    'stephaniesPassword'
  ),
  makeUserData('Prof', 'Katz', 'prof@email.com', 'profsPassword', true),
];

const beveragesData = [
  makeBeverageData(
    'Coors Light',
    'Coors',
    3.7,
    'Coors light!!!',
    'Wheat',
    1.99,
    12,
    50
  ),
  makeBeverageData(
    'Budweiser',
    'Budweiser',
    3.7,
    'Budweiser!!!',
    'Wheat',
    1.99,
    12,
    50
  ),
  makeBeverageData('PBR', 'PBR', 3.7, 'PBR!!!', 'Wheat', 1.99, 12, 50),
  makeBeverageData(
    '805',
    'Firestone',
    5.7,
    "Lost coast's best IPA!",
    'IPA',
    3.49,
    12,
    50
  ),
];

db.sync({ force: true })
  .then(async () => {
    const userProms = usersData.map(user => User.create(user));
    const bevProms = beveragesData.map(bev => Beverage.create(bev));

    await Promise.all(userProms);
    await Promise.all(bevProms);
  })
  .then(() => console.log('Seed complete!'))
  .catch(console.error);
