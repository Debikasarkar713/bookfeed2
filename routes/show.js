const showRouter = require('express').Router();

const { bookSearch } = require('../service/book');
const { deleteBooks, saveBooks } = require('../models/favorites');

showRouter.get('/', bookSearch, (req, res) => {
  // console.log(res.book);

  // res.json(res.book);
  res.render('feed', {
    books: res.book || [],
  });
});


showRouter.delete('/favorites/:id', deleteBooks, (req, res) => {
  res.redirect('/show');
});

showRouter.post('/favorites', saveBooks, (req, res) => {
  res.redirect('/show');
});

module.exports = showRouter;
