const router = require("express").Router();
const meetingsController = require("../controllers/meetings-controller");

router
  .route("/:id")
  .get(meetingsController.findMeetings)
  .post(meetingsController.create);

  router
  .route("/meeting/:id")
  .get(meetingsController.findOne)
  .put(meetingsController.update)
  .delete(meetingsController.remove);


module.exports = router;