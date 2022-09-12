const { connect } = require('mongoose');

async function dbConnect() {
  try {
    await connect('mongobd//localhost:27017', {
      dbName: 'Shop',
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
