const showRouter = require('express').Router();

const { bookSearch } = require('../service/book');
const { deleteBooks, saveBooks, getBooks } = require('../models/favorites');

showRouter.get('/', bookSearch, (req, res) => {
  console.log('books', res.book);
  res.render('feed', {
    books: res.book || [],
  });
});


showRouter.delete('/favorites/:id', deleteBooks, (req, res) => {
  res.redirect('/show');
});

showRouter.post('/favorites', saveBooks, (req, res) => {
  res.redirect('/');
});

showRouter.get('/favorites', getBooks, (req, res) => {
  res.json(res.favorites);
});


module.exports = showRouter;
