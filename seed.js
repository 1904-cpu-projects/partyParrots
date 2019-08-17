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
    50,
    'https://products3.imgix.drizly.com/ci-north-coast-brother-thelonious-belgian-abbey-ale-4000616477ca4688.jpeg?auto=format%2Ccompress&fm=jpeg&q=20',
    'https://s.hdnux.com/photos/71/15/17/14996456/3/rawImage.jpg'
  ),
  makeBeverageData(
    'Sour Monkey',
    'Victory Brewing',
    9.5,
    'Fruity notes from imported Belgian yeast swirl through a precise souring. Pucker up to a bite of citrus laden tang ending with a delectable experience.',
    'Sour',
    3.29,
    12,
    30,
    'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hd8/hc1/9664172490782.png',
    'https://www.wlvliquors.com/wp-content/uploads/2019/02/Victory-Sour-Monkey.jpeg'
  ),
  makeBeverageData(
    'Red Trolley Ale',
    'Karl Strauss Brewing',
    5.8,
    'Boldly brewed with a half-ton of caramelized malts, our multi award-winning Irish Red has rich toffee flavors, notes of dried fruit, and a slightly sweet finish.',
    'Red',
    1.49,
    12,
    70,
    'https://i.pinimg.com/originals/d1/26/36/d126367ef4562fdcc0bf3a5e870f3b61.jpg',
    'http://sanjosebarandgrill.com/wp-content/uploads/2016/07/redtrolley-600x600.jpg'
  ),
  makeBeverageData(
    'Great White',
    'Lost Coast Brewery',
    4.8,
    'A translucent golden color, topped with a hint of citrus, coriander and a secret blend of herbs.',
    'Belgian',
    3.04,
    12,
    25,
    'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h45/h4c/8799641927710.png',
    'https://cdn1.wine-searcher.net/images/labels/67/76/10206776.jpg'
  ),
  makeBeverageData(
    'Moose Drool',
    'Big Sky Brewing',
    5.1,
    'It\'s chocolate brown in color with a creamy texture. A malty beer with just enough hop presence to keep it from being too sweet. The aroma mostly comes from the malt with a hint of spice added by the hops.',
    'Dark',
    2.00,
    12,
    40,
    'https://beersavant.files.wordpress.com/2012/10/moosedrool.jpg',
    'https://live.staticflickr.com/65535/48559474316_dcdcf5326c.jpg'
  ),
  makeBeverageData(
    'Hazy Little Thing',
    'Sierra Nevada Brewing',
    6.7,
    'Unfiltered, unprocessed IPA, straight from the tanks and into the can.',
    'IPA',
    2.88,
    12,
    50,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAajwpzKBiorPOH90w0S5DgBy7qxmp0b44gjdhn0272q1auOiT',
    'https://untappd.akamaized.net/site/beer_logos_hd/beer-2412786_19db7_hd.jpeg'
    
  ),
  makeBeverageData(
    'Coors Light',
    'Coors Brewing Company',
    4.2,
    'A classic from Colorado!',
    'Lager',
    1.99,
    12,
    50,
    'https://dydza6t6xitx6.cloudfront.net/ci-coors-light-9373e1becba78338.jpeg',
    'https://www.gomersofkansas.com/wp-content/uploads/2018/03/Coors-Light-Logo.jpg'
  ),
  makeBeverageData(
    'Budweiser',
    'Anheuser-Busch',
    5.0,
    'An East Coast classic!',
    'Lager',
    1.99,
    12,
    50,
    'https://paneco-sg-moonshine-production-s3-amazonaws-com.freetls.fastly.net/spree/images/572/product/budweiser-330ml-bottle.jpg?1504014978',
    'https://cdn.freebiesupply.com/logos/large/2x/budweiser-logo-png-transparent.png'
  ),
  makeBeverageData(
    'Miller Lite',
    'Miller Brewing Company',
    4.2,
    'You best be playing Edward 40 hands!',
    'Lager',
    1.99,
    12,
    50,
    'https://cdn.shoplightspeed.com/shops/611413/files/7449685/miller-brewing-co-miller-lite-beer-6pk-bottles.jpg',
    'http://drink101.com/wp-content/uploads/2008/09/edward_40_hands.jpg'
  ),
  makeBeverageData(
    '805',
    'Firestone Walker Brewing Company',
    5.7,
    "A light, refreshing blonde ale created for the laid back California lifestyle. Subtle malt sweetness is balanced by a touch of hops.",
    'IPA',
    3.49,
    12,
    50,
    'https://cdn.shopify.com/s/files/1/0592/5937/products/Firestone_Walker_805_12OZ_BTL_grande.jpeg?v=1415378564',
    'https://pbs.twimg.com/profile_images/509172546176958464/bo-fa98S.jpeg'
  ),
  makeBeverageData(
    'Marshmallow Psycho',
    'Amundsen Brewery',
    12.3,
    'Barrel-aged imperial marshmallow stout',
    'Dark',
    11.99,
    12,
    50,
    'https://www.beerhawk.co.uk/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/a/m/amundsen_bourbonba_marshmallow_psycho.png',
    'https://untappd.akamaized.net/site/beer_logos_hd/beer-2191044_e9ab1_hd.jpeg'
  ),

  makeBeverageData(
    'Pecan Psychosis',
    'Amundsen Brewery',
    12.3,
    'Barrel-aged pecan & maple pie imperial stout',
    'Dark',
    11.50,
    12,
    50,
    'https://www.beerhawk.co.uk/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/a/m/amundsen_pecan_psychosis.png',
    'https://res.cloudinary.com/ratebeer/image/upload/e_trim:15/d_beer_img_default.png,f_auto/beer_568645'
  ),
  makeBeverageData(
  'Fat Tire',
  'New Belgium',
  5.2,
  'Fat Tire Amber is the easy-drinking Amber Ale born in Colorado from New Belgium Brewing Company, the 100 percent employee-owned leader in environmental stewardship.',
  'Red',
  1.23,
  12,
  66,
  'https://www.ohbeautifulbeer.com/wp-content/uploads/2011/04/FatTire12ozBottle.jpg',
  'https://beerstreetjournal.com/wp-content/uploads/861269_254821267986419_1772612280_o.jpg'
  ),
  makeBeverageData(
    'Sharkinator',
    'Lost Coast Brewery',
    4.8,
    "Sink your teeth into the dry hopped Cascade, Crystal, and Citra hops that get a wonderful citrus aroma and a nice hoppy finish. It's the perfect beer for anyone who's not afraid of a little (or big) bite.",
    'IPA',
    3.49,
    12,
    50,
    'https://cdn.shoplightspeed.com/shops/611413/files/7188569/lost-coast-brewery-lost-coast-brewery-sharkinator.jpg',
    'https://untappd.akamaized.net/site/beer_logos_hd/beer-677170_7ee29_hd.jpeg'
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

