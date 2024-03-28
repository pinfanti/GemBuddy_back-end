const knex = require("knex")(require("../knexfile"));

const findMeetings = async (req, res) => {
    try {
      // Query activities based on the park_id column
      const meetingsFound = await knex("meetings")
        .where({ activity_id: req.params.id });
  
      if (meetingsFound.length === 0) {
        return res.status(404).json({
          message: `Meetings with activity ID ${req.params.id} not found` 
        });
      }
  
   res.json(meetingsFound);
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({
        message: `Unable to retrieve meetings with activity ID ${req.params.id}`,
      });
    }
  }; 

  const create = async (req, res) => {
    const meeting = req.body;
  
    if (!ismeetingValid(meeting)) {
        return res.status(400).send(`Invalid data`);
    }

    try {
        const id = await knex("meetings").insert(meeting);
  
        res.status(201).json({ id: id[0], ...meeting });
    } catch (error) {
        console.error(error);
  
        res.status(400).send(`Error creating meeting`);
    }

    function ismeetingValid(meeting) {
        return (
            meeting.user_id &&
            meeting.place &&
            meeting.date &&
            meeting.hour &&
            meeting.receive_payment !== undefined &&
            meeting.value !== undefined &&
            meeting.description_gem &&
            meeting.description_meeting &&
            meeting.activity_id
        );
    }
};

module.exports = {
    create,
    findMeetings
};
