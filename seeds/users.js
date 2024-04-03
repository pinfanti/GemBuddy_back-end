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
            "description": "John is an intrepid explorer with an insatiable thirst for adventure. Whether it's scaling towering cliffs or trekking through dense jungles, he thrives on the adrenaline rush of outdoor exploration, always seeking out the next thrilling escapade.",
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
            "description": "Jane's love for nature knows no bounds. From the serene tranquility of hidden forest trails to the rugged beauty of mountain vistas, she finds solace and excitement in every step she takes. Camping under starlit skies and discovering untouched wilderness are her greatest passions.",
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
            "description": "Michael embodies the spirit of adventure, constantly seeking out the road less traveled. His love for the outdoors is matched only by his thirst for adrenaline, whether it's conquering untamed rapids or summiting snow-capped peaks. Every journey is a chance to push his limits and embrace the wild.",
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
            "description": "Emily is a fervent outdoor enthusiast, finding joy and fulfillment in every aspect of nature's grandeur. Whether she's backpacking through rugged terrain, scaling rocky cliffs, or simply soaking in the beauty of a sunset over the horizon, her passion for exploration knows no bounds.",
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
            "description": "William's heart belongs to the mountains, forests, and rivers that define the natural world. With every hike, climb, and paddle, he seeks to immerse himself in the awe-inspiring beauty of the wilderness. For him, nature isn't just a place to visit; it's a sanctuary where he feels most alive.",
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
            "description": "Olivia's soul finds its truest expression in the great outdoors. Whether she's gliding across glassy lakes in a kayak or standing atop towering peaks, she feels a profound connection to the earth's raw majesty. Each adventure is a chance to discover new depths within herself.",
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
            "description": "James is a true adventurer at heart, fueled by an irrepressible curiosity and a hunger for challenge. From navigating uncharted trails to basking in the wonders of the natural world, he approaches every journey with open arms and an unwavering spirit. For him, the greatest rewards lie beyond the beaten path.",
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
            "description": "Sophia's love for outdoor adventures is matched only by her reverence for the beauty of the natural world. Whether she's trekking through ancient forests or gazing up at a sky ablaze with stars, she finds inspiration and renewal in the embrace of Mother Nature.",
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
            "description": "Alexander is a nature enthusiast with a boundless sense of wonder and excitement for the world around him. Whether he's traversing rugged landscapes or plunging into crystal-clear waters, he finds joy in every moment spent immersing himself in the untamed beauty of the wilderness.",
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
            "description": "Priscila's passion for outdoor pursuits is matched only by her sense of wonder and awe for the natural world. From chasing sunsets across remote landscapes to exploring hidden trails off the beaten path, she finds joy and inspiration in every adventure. For her, the great outdoors is both a playground and a sanctuary, offering endless opportunities for discovery and growth.",
            "image": "/images/person10.jpg",
            "registration_date": "2024-03-29T06:00:00.000Z",
            "last_login": "2024-03-27T14:00:00.000Z"
        }
     
    ]);
  };