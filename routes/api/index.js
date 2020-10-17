const router = require("express").Router();
const userRoutes = require("./users");
const giftRoutes = require("./gifts");

router.use("/users", userRoutes);
router.use("/gifts", giftRoutes);

module.exports = router;
