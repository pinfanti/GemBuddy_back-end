const router = require("express").Router();
const usersController = require("../controllers/users-controller");

router
  .route("/")
  .get(usersController.index)

router
  .route("/user/:id")
  .get(usersController.findOne);


module.exports = router;