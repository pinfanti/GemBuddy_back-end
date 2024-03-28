const knex = require("knex")(require("../knexfile"));

const findActivities = async (req, res) => {
  try {
    // Query activities based on the park_id column
    const activitiesFound = await knex("activities")
      .where({ park_id: req.params.id });

    if (activitiesFound.length === 0) {
      return res.status(404).json({
        message: `Activities with park ID ${req.params.id} not found` 
      });
    }

 res.json(activitiesFound);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      message: `Unable to retrieve activities data for park with ID ${req.params.id}`,
    });
  }
};

module.exports = {
  findActivities
};

