const router = require("express").Router();
const meetingsController = require("../controllers/meetings-controller");

router
  .route("/:id")
  .get(meetingsController.findMeetings)
  .post(meetingsController.create);


module.exports = router;