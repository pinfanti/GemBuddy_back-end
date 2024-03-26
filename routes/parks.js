const router = require("express").Router();
const parksController = require("../controllers/parks-controller");

router
  .route("/")
  .get(parksController.index)

router
  .route("/:id")
  .get(parksController.findOne);


module.exports = router;