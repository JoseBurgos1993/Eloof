const express = require("express");
const router = express.Router();
const Gifts = require("../../database/models/gifts");
router.post("/", (req, res) => {
  Gifts.create({
    kidId: req.body.kidId,
    name: req.body.name,
    discription: req.body.discription,
    picture: req.body.picture,
    price: req.body.price,
    url: req.body.url,
    purchased: req.body.purchased,
  })
    .then((gifts) => {
      res.json(gifts);
    })
    .catch((err) => console.log(err));
});
router.get("/:id", (req, res) => {
  Gifts.find({ kidId: req.params.id })
    .then((gifts) => {
      res.json(gifts);
    })
    .catch((err) => console.log(err));
});
router.get("/", (req, res) => {
  Gifts.find({})
    .then((gifts) => {
      res.json(gifts);
    })
    .catch((err) => console.log(err));
});
router.get("/:id/true", (req, res) => {
  Gifts.find({ kidId: req.params.id })
    .then((gifts) => {
      res.json(gifts);
    })
    .catch((err) => console.log(err));
});
router.post("/:kidID/:itemID", (req, res) => {
  Gifts.updateOne(
    {
      kidId: req.params.kidID,
      _id: req.params.itemID,
    },
    { $set: { purchased: true } }
  )
    .then((gifts) => {
      res.json(gifts);
    })
    .catch((err) => console.log(err));
});
module.exports = router;