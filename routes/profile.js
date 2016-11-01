const router = require('express').Router();
const { authenticate } = require('../lib/auth');
const { getBooks, deleteBooks } = require('../models/favorites');


router.get('/', authenticate, getBooks, (req, res) => {
 res.render('users/profile', {
  books: res.favorites,
 });
});

router.delete('/user/profile/:_id', deleteBooks, (req, res) => {
 res.redirect('/user/profile');
});

module.exports = router;
