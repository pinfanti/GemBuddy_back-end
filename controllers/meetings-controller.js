const knex = require("knex")(require("../knexfile"));

const findAllMeetings = async (req, res) => {
  try {
    // Query activities based on the park_id column
    const meetingsFound = await knex("meetings")
    
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


const findMeetings = async (req, res) => {
    try {
      // Query activities based on the park_id column
      const meetingsFound = await knex("meetings")
      .join('users', 'meetings.user_id','users.id')
      .select('meetings.*', 'users.first_name', 'users.last_name', 'users.image', 'users.username' )   
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

  const findOne = async (req, res) => {
    try {
      const MeetingFound = await knex("meetings")
      .join('users', 'meetings.user_id','users.id')
      .select('meetings.*', 'users.first_name', 'users.last_name', 'users.image', 'users.username' )   
      .where({"meetings.id": req.params.id });
  
      if (MeetingFound.length === 0) {
        return res.status(404).json({
          message: `Meeting with ID ${req.params.id} not found`
        });
      }
  
      const MeetingData = MeetingFound[0];
  
      res.json(MeetingData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve meeting data with ID ${req.params.id}`,
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

const update = async (req, res) => {
  const meeting = req.body;
  const meetingId = req.params.id;

  if (!ismeetingValid(meeting)) {
    return res.status(400).send(`Invalid data`);
  }

  try {
    const exists = await knex("meetings").where("id", meetingId).first();

    if (!exists) {
      return res.status(404).send(`Meeting is not found`);
    }

    await knex("meetings").where("id", meetingId).update(meeting);

    meeting.id = meetingId;
    res.status(200).json(meeting);
  } catch (error) {
    console.error(error);

    res.status(400).send(`Error updating meeting`);
  }
};

const remove = async (req, res) => {
  try {
    const meetingDeleted = await knex('meetings')
      .where("id", req.params.id)
      .del();

    if (meetingDeleted === 0) {
      res
        .status(404)
        .json({ message: `Meeting with ID ${req.params.id} not found` });
    } else {
      res.status(204).json(meetingDeleted);
    }
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete meeting: ${error}`
    });
  }
};

module.exports = {
    create,
    findMeetings,
    update, 
    remove, 
    findOne,
    findAllMeetings
};
