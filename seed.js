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
  quantity,
  imageURL,
  hoverURL,
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
  imageURL,
  hoverURL,
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
    'Sculpin',
    'Ballast Point Brewing',
    7,
    'This delicious Ballast Point Ale took a Bronze Medal at the 2007 Great American Beer Festival in the Pro Am category.',
    'IPA',
    13.99,
    12,
    20,
    'https://dydza6t6xitx6.cloudfront.net/ci-ballast-point-sculpin-ipa-d68f4692b85c1416.png',
    'https://untappd.akamaized.net/site/beer_logos_hd/beer-_5558_hd_1efe39f0ec17fa120978033a71dd26.jpeg'
  ),
  makeBeverageData(
    'Delirium Tremens',
    'Huyghe Brewery',
    8.5,
    'The allusion to pink elephants and the choice of names is not due to chance. With a particular character, the unique taste of results from the use of three different kinds of yeast.',
    'Belgian',
    7.99,
    20,
    10,
    'https://dydza6t6xitx6.cloudfront.net/ci-delirium-tremens-cc7c777c5292a683.png',
    'http://www.thepoisonreview.com/wp-content/uploads/delirium_tremens_label1.gif',
  ),
  makeBeverageData(
    'King JJJuliusss',
    'Tree House Brewing',
    8.4,
    'Mango, orange, and sweet grapefruit are predominant in the aroma with hints of pineapple and blended tropical fruit juice.',
    'IPA',
    3.99,
    12,
    40,
  ),
  makeBeverageData(
    'Namaste White',
    'Dogfish Head Craft Brewery',
    4.8,
    'A witbier bursting with good karma. Made with dried organic orange slices, fresh-cut lemongrass and a bit of coriander, this Belgian-style white beer is a great thirst quencher.',
    'Belgian',
    1.24,
    12,
    35,
    'https://dydza6t6xitx6.cloudfront.net/ci-dogfish-head-namaste-b617315e342ddda7.png',
    'https://untappd.akamaized.net/site/beer_logos_hd/beer-6400_71f33_hd.jpeg'
  ),
  makeBeverageData(
    'Vanilla Oatis',
    'Ninkasi Brewing',
    7,
    'A divine blend of vanilla, coffee, chocolate, and roasted malt notes swirl together to create a smooth Oatmeal Stout with a crisp finish.',
    'Dark',
    2.78,
    12,
    40,
    'https://48tk9j3a74jb133e1k2fzz2s-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/Ninkasi-Vanilla-Oatis-bottle.jpg',
    'https://live.staticflickr.com/65535/48533491746_cd54547ee5.jpg'
  ),
  makeBeverageData(
    'Brother Thelonious',
    'North Coast Brewing',
    9.4,
    'Like a Belgian "Dark Strong Ale," this beer is rich and robust.',
    'Dark',
    9.99,
    22,
    50
  ),
  makeBeverageData(
    'Sour Monkey',
    'Victory Brewing',
    9.5,
    'Fruity notes from imported Belgian yeast swirl through a precise souring. Pucker up to a bite of citrus laden tang ending with a delectable experience.',
    'Sour',
    3.29,
    12,
    30
  ),
  makeBeverageData(
    'Red Trolley Ale',
    'Karl Strauss Brewing',
    5.8,
    'Boldly brewed with a half-ton of caramelized malts, our multi award-winning Irish Red has rich toffee flavors, notes of dried fruit, and a slightly sweet finish.',
    'Red',
    1.49,
    12,
    70
  ),
  makeBeverageData(
    'Grage Sale Ale',
    'Sequoia Brewing',
    6.0,
    'Double dry hopped pale ale is brewed using 20% rye malt. Bittered and flavored with a combination of Centennial, Cascade, Simcoe, and Chinook hops.',
    'Pale',
    2.59,
    12,
    30
  ),
  makeBeverageData(
    'Great White',
    'Lost Coast Brewery',
    4.8,
    'A translucent golden color, topped with a hint of citrus, coriander and a secret blend of herbs.',
    'Belgian',
    3.04,
    12,
    25
  ),
  makeBeverageData(
    'Moose Drool',
    'Big Sky Brewing',
    5.1,
    'It\'s chocolate brown in color with a creamy texture. A malty beer with just enough hop presence to keep it from being too sweet. The aroma mostly comes from the malt with a hint of spice added by the hops.',
    'Dark',
    2.00,
    12,
    40
  ),
  makeBeverageData(
    'Hazy Little Thing',
    'Sierra Nevada Brewing',
    6.7,
    'Unfiltered, unprocessed IPA, straight from the tanks and into the can.',
    'IPA',
    2.88,
    12,
    50
  ),
  makeBeverageData(
    'Coors Light',
    'Coors Brewing Company',
    4.2,
    'A classic from Colorado!',
    'Lager',
    1.99,
    12,
    50
  ),
  makeBeverageData(
    'Budweiser',
    'Anheuser-Busch',
    5.0,
    'An East Coast classic!',
    'Lager',
    1.99,
    12,
    50
  ),
  makeBeverageData(
    'Miller Lite',
    'Miller Brewing Company',
    4.2,
    'You best be playing Edward 40 hands!',
    'Lager',
    1.99,
    12,
    50
  ),
  makeBeverageData(
    '805',
    'Firestone Walker Brewing Company',
    5.7,
    "The lost coast's best known IPA!",
    'IPA',
    3.49,
    12,
    50
  ),
];

db.sync({ force: true })
  .then(() => {
    const userProms = usersData.map(user => User.create(user));
    const bevProms = beveragesData.map(bev => Beverage.create(bev));

    return Promise.all([Promise.all(userProms), Promise.all(bevProms)]);
  })
  .then(() => console.log('Seed complete!'))
  .catch(console.error);

