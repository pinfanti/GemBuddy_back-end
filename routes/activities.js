const router = require("express").Router();
const activitiesController = require("../controllers/activities-controller");


router
  .route("/:id")
  .get(activitiesController.findActivities);


module.exports = router;