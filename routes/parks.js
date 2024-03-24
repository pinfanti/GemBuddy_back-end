const router = require("express").Router();
const parksController = require("../controllers/parks-controller");

router
  .route("/")
  .get(parksController.index)


module.exports = router;