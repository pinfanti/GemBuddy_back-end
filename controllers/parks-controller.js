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

  module.exports = {
    index
  };
  