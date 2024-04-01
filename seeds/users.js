/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('users').del()
    await knex('users').insert([
        {
            "id": 1,
            "first_name": "John",
            "last_name": "Doe",
            "username": "johndoe123",
            "email": "john@example.com",
            "password": "password123",
            "description": "Passionate about exploring the great outdoors and seeking thrilling adventures.",
            "image": "/images/person1.jpeg",
            "registration_date": "2024-03-27T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        },
        {
            "id": 2,
            "first_name": "Jane",
            "last_name": "Smith",
            "username": "janesmith",
            "email": "jane@example.com",
            "password": "password456",
            "description": "Enthusiastic about hiking, camping, and discovering new trails in nature.",
            "image": "/images/person2.jpg",
            "registration_date": "2024-03-27T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        },
        {
            "id": 3,
            "first_name": "Michael",
            "last_name": "Johnson",
            "username": "michaelj",
            "email": "michael@example.com",
            "password": "password789",
            "description": "Adventurous spirit with a love for exploring remote wilderness and experiencing adrenaline-filled activities.",
            "image": "/images/person3.jpg",
            "registration_date": "2024-03-27T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        },
        {
            "id": 4,
            "first_name": "Emily",
            "last_name": "Brown",
            "username": "emilybrown",
            "email": "emily@example.com",
            "password": "passwordabc",
            "description": "Passionate outdoor enthusiast who enjoys backpacking, rock climbing, and embracing the beauty of nature.",
            "image": "/images/person4.jpg",
            "registration_date": "2024-03-27T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        },
        {
            "id": 5,
            "first_name": "William",
            "last_name": "Taylor",
            "username": "willtay",
            "email": "william@example.com",
            "password": "passworddef",
            "description": "Nature lover who finds solace in the mountains, forests, and rivers, always seeking the next thrilling adventure.",
            "image": "/images/person5.jpg",
            "registration_date": "2024-03-27T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        },
        {
            "id": 6,
            "first_name": "Olivia",
            "last_name": "Anderson",
            "username": "oliviaa",
            "email": "olivia@example.com",
            "password": "passwordghi",
            "description": "Passionate about outdoor exploration, from kayaking through serene lakes to summiting majestic peaks.",
            "image": "/images/person6.jpg",
            "registration_date": "2024-03-27T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        },
        {
            "id": 7,
            "first_name": "James",
            "last_name": "Martinez",
            "username": "jamesm",
            "email": "james@example.com",
            "password": "passwordjkl",
            "description": "Adventurous soul who thrives on challenges and embraces the wonders of nature with open arms.",
            "image": "/images/person7.jpg",
            "registration_date": "2024-03-27T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        },
        {
            "id": 8,
            "first_name": "Sophia",
            "last_name": "Hernandez",
            "username": "sophiah",
            "email": "sophia@example.com",
            "password": "passwordmno",
            "description": "Passionate about outdoor adventures, from trekking through dense forests to stargazing under the vast open sky.",
            "image": "/images/person8.jpg",
            "registration_date": "2024-03-27T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        },
        {
            "id": 9,
            "first_name": "Alexander",
            "last_name": "Young",
            "username": "alexandery",
            "email": "alexander@example.com",
            "password": "passwordpqr",
            "description": "Nature enthusiast who finds joy in immersing oneself in the wilderness and seeking thrilling escapades.",
            "image": "/images/person9.jpg",
            "registration_date": "2024-03-27T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        },
        {
            "id": 10,
            "first_name": "Priscila",
            "last_name": "Teramoto",
            "username": "priscilat",
            "email": "priscila@example.com",
            "password": "passwordstu",
            "description": "Passionate about outdoor pursuits, from exploring hidden trails to chasing sunsets in remote landscapes.",
            "image": "/images/person10.jpg",
            "registration_date": "2024-03-29T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        }
     
    ]);
  };