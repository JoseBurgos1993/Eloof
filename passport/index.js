const passport = require('passport');

const LocalStrategy = require('./localStrategy');
const User = require('../database/models/user');

passport.serializeUser((user, done) => {
  done(null, { ...user });
});

passport.deserializeUser((user, done) => {
  User.findOne({ _id: user._id }, 'username', (err, user) => {
    done(null, user);
  });
});

//  Use Strategies
passport.use(LocalStrategy);

module.exports = passport;