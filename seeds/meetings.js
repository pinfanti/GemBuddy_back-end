/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('meetings').del()
    await knex('meetings').insert([
        [
            {
                "id": 1,
                "user_id": 1,
                "place": "Valley of the Five Lakes Trail",
                "date": "2024-03-27T06:00:00.000Z",
                "hour": "10:00:00",
                "receive_payment": 1,
                "value": "50.00",
                "description_gem": "Discussing nature photography",
                "description_meeting": "Meeting with John Doe to discuss our upcoming photography trip to Valley of the Five Lakes Trail in Jasper.",
                "activity_id": 1
            },
            {
                "id": 2,
                "user_id": 2,
                "place": "Maligne Canyon Trail",
                "date": "2024-03-28T06:00:00.000Z",
                "hour": "14:30:00",
                "receive_payment": 0,
                "value": null,
                "description_gem": "Let's work as a group to improve Maligne Lake trail",
                "description_meeting": "Casual meetup with Jane Smith to discuss project ideas at Maligne Canyon Trail in Jasper.",
                "activity_id": 1
            },
            {
                "id": 3,
                "user_id": 3,
                "place": "Whistlers Mountain Trail",
                "date": "2024-03-29T06:00:00.000Z",
                "hour": "08:00:00",
                "receive_payment": 1,
                "value": "75.00",
                "description_gem": "Selling gems",
                "description_meeting": "Meeting with Michael Johnson for a gem selling session at Whistlers Mountain Trail in Jasper.",
                "activity_id": 1
            },
            {
                "id": 4,
                "user_id": 4,
                "place": "Old Fort Point Loop Trail",
                "date": "2024-03-30T06:00:00.000Z",
                "hour": "17:00:00",
                "receive_payment": 1,
                "value": "100.00",
                "description_gem": "Sharing adventure stories",
                "description_meeting": "Meeting with Emily Brown to share our recent adventure stories at Old Fort Point Loop Trail in Jasper.",
                "activity_id": 1
            },
            {
                "id": 5,
                "user_id": 5,
                "place": "Bald Hills Trail",
                "date": "2024-03-31T06:00:00.000Z",
                "hour": "11:00:00",
                "receive_payment": 0,
                "value": null,
                "description_gem": null,
                "description_meeting": "Meeting with William Taylor that would like to have company to his trail.",
                "activity_id": 1
            },
            {
                "id": 6,
                "user_id": 1,
                "place": "Maligne Lake Trail",
                "date": "2024-04-27T06:00:00.000Z",
                "hour": "10:00:00",
                "receive_payment": 1,
                "value": "50.00",
                "description_gem": "Most beatiful lake around",
                "description_meeting": "Meeting with John Doe to make a hike and discover an hiden waterfall.",
                "activity_id": 1
            },
            {
                "id": 7,
                "user_id": 2,
                "place": "Bald Eagle Viewing",
                "date": "2024-04-19T06:00:00.000Z",
                "hour": "10:00:00",
                "receive_payment": 1,
                "value": "20.00",
                "description_gem": "Bald Eagle View",
                "description_meeting": "Meeting to spot the birds in nature. How awesome",
                "activity_id": 2
            }, 
            {
                "id": 8,
                "user_id": 3,
                "place": "Black Bear Viewing",
                "date": "2024-04-19T06:00:00.000Z",
                "hour": "10:00:00",
                "receive_payment": 0,
                "value": null,
                "description_gem": "Black Bear View",
                "description_meeting": "Meeting to spot the black bears in nature. How awesome, just dont forget the bear spray",
                "activity_id": 2
            },
            {
                "id": 9,
                "user_id": 4,
                "place": "Patricia lAke ",
                "date": "2024-05-19T06:00:00.000Z",
                "hour": "10:00:00",
                "receive_payment": 1,
                "value": "20.00",
                "description_gem": "Patricia Lake is a serene mountain lake located just outside the town of Jasper. It offers opportunities for canoeing, kayaking, and picnicking amidst stunning alpine scenery.",
                "description_meeting": "Group of 10 people to admire the lake ",
                "activity_id": 3
            }, 
            {
                "id": 10,
                "user_id": 5,
                "place": "Pyramid Lake gather together",
                "date": "2024-06-19T06:00:00.000Z",
                "hour": "10:00:00",
                "receive_payment": 0,
                "value": null,
                "description_gem": "Situated at the foot of Pyramid Mountain, this picturesque lake offers beautiful views and recreational activities like fishing, kayaking, and hiking around its shores.",
                "description_meeting": "Gather togheter and enjoy a day in the lake.",
                "activity_id": 3
            },
        ]        
      
    ]);
  };