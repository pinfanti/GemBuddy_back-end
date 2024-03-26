const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
    if (req.query.type === "name") {
      try {
        const wh = await knex("parks").select("id", "park_name");
        res.json(wh);
      } catch (e) {
        res.status(500).json({
          message: `unable to get parks: ${e}`,
        });
      }
    } else {
      try {
        const data = await knex("parks");
        res.status(200).json(data);
      } catch (err) {
        res.status(400).send(`Error retrieving Parks: ${err}`);
      }
    }
  };

  const findOne = async (req, res) => {
    try {
      const ParkFound = await knex("parks").where({
        id: req.params.id,
      });
  
      if (ParkFound.length === 0) {
        return res.status(404).json({
          message: `Park with ID ${req.params.id} not found`
        });
      }
  
      const ParkData = ParkFound[0];
  
     res.json(ParkData);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: `Unable to retrieve park data with ID ${req.params.id}`,
      });
    }
  };

  module.exports = {
    index,
    findOne
  };
  