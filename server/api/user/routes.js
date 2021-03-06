const router = require('express').Router();
const controller = require('./controller');
const passport = require('passport');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), controller.getUser);

module.exports = router;
