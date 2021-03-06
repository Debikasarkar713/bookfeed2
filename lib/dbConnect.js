// code which is familiar from Bobby and rafa considering his template was used
const MongoClient = require('mongodb');

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku
const connectionURL = process.env.MONGOLAB_URI || 'mongodb://localhost/books';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB
};
