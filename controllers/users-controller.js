const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
    if (req.query.type === "name") {
      try {
        const wh = await knex("users").select("id", "first_name");
        res.json(wh);
      } catch (e) {
        res.status(500).json({
          message: `unable to get users: ${e}`,
        });
      }
    } else {
      try {
        const data = await knex("users");
        res.status(200).json(data);
      } catch (err) {
        res.status(400).send(`Error retrieving users: ${err}`);
      }
    }
  };

  const findOne = async (req, res) => {
    try {
      const UserFound = await knex("users").where({
        id: req.params.id,
      });
  
      if (UserFound.length === 0) {
        return res.status(404).json({
          message: `User with ID ${req.params.id} not found`
        });
      }
  
      const UserData = UserFound[0];
  
     res.json(UserData);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: `Unable to retrieve user data with ID ${req.params.id}`,
      });
    }
  };

  module.exports = {
    index,
    findOne
  };
  