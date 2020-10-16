const express = require('express');

const router = express.Router();

const User = require('../../database/models/user');
const passport = require('../../passport');

router.post('/', (req, res) => {
  const { username, password, usertype, wishlist } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log('User Create Error: ', err);
      return;
    }

    if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
      return;
    }
    let newUser;
    if(usertype === "elf"){
      newUser = new User({
        username: username,
        password: password,
        usertype: usertype,
      });

    } else if(usertype === "believer"){
      newUser = new User({
        username: username,
        password: password,
        usertype: usertype,
        wishlist: wishlist,
      });

    } else{
      console.log("ERRROROOR");
    }

    newUser.save((err, savedUser) => {
      if (err) return res.json(err);

      res.json(savedUser);
    });
  });
});

router.post(
  '/login',
  (req, res, next) => {
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('LOGGED IN', req.user);
    res.send({
      username: req.user.username,
    });
  }
);

router.get('/', (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.status(200).json({ msg: 'LOGGED OUT' });
  } else {
    res.status(404).json({ msg: 'NO USER TO LOGOUT' });
  }
});

/////////

router.get('/profile', (req,res) => {
  if (req.user) {
    User.findOne({username: req.user.username}, (err, user) => {
      if(err){
        console.log("User find Error: ", err);
        return;
      }
      console.log("User ", user);
      res.json({ user: user });

    });
  } else {
    res.json({ user: null });
  }
});

router.post("/additem", (req,res) => {
  console.log("The update request: ", req.body);
  const {item, user} = req.body;
  console.log("Item in the update part: ", item)
  User.update({_id: user._id}, {$push: {"wishlist": item.name}}, (err, result) => {
    if(err){
      console.log("User Update Error: ", err);
      return;
    }
    console.log("It did the update?")
    res.status(200);
  });
});

module.exports = router;