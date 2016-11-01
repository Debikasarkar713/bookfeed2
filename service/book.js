const fetch = require('node-fetch');

const API_URL = 'https://www.googleapis.com/books/v1/volumes?';
const API_KEY = process.env.API_KEY;

function bookSearch(req, res, next) {
  const book = req.query.search;
  console.log(book);

  fetch(`${API_URL}q=${book}&key=${API_KEY}`)
  .then(r => r.json())
  .then((result) => {
    res.book = result;
    next();
    console.log(res.book);
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { bookSearch };

//instead of form use ajax to hit your route and append to your body

//favorites should be mongo routes and models to get mongo so they can save stuff

//
