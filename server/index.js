const app = require('./app/index');
const { db } = require('./db/index');

const PORT = process.env.PORT || 3000;

const force = true;

db.sync({ force })
  .then(() => {
    app.listen(PORT, () => console.log(`App listening at port: ${PORT}`));
  })
  .catch(console.error);
