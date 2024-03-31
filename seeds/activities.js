/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("activities").del();
  await knex("activities").insert([
    [
      {
          "id": 1,
          "park_id": 1,
          "activitie": "Trails",
          "image": "images/Hiking.jpg",
          "description": "Hiking in the Canadian Rockies offers adventurers a chance to immerse themselves in the stunning natural beauty of the mountainous landscape.",
          "created_at": "2024-03-26T20:17:02.000Z",
          "updated_at": "2024-03-26T20:17:02.000Z"
      },
      {
          "id": 2,
          "park_id": 1,
          "activitie": "Wildlife Viewing",
          "image": "images/Wildlife.jpg",
          "description": "Wildlife viewing in the Canadian Rockies is an unforgettable experience, offering the opportunity to encounter a diverse array of iconic wildlife species in their natural habitats.",
          "created_at": "2024-03-26T20:17:02.000Z",
          "updated_at": "2024-03-26T20:17:02.000Z"
      },
      {
          "id": 3,
          "park_id": 1,
          "activitie": "Lakes",
          "image": "images/Lakes.jpg",
          "description": "The Canadian Rockies are dotted with an abundance of stunning lakes, each offering its own unique beauty and recreational opportunities.",
          "created_at": "2024-03-26T20:17:02.000Z",
          "updated_at": "2024-03-29T16:09:08.000Z"
      },
      {
          "id": 4,
          "park_id": 1,
          "activitie": "Food",
          "image": "images/Food.jpg",
          "description": "Let's eat",
          "created_at": "2024-03-26T20:17:01.000Z",
          "updated_at": "2024-03-29T16:09:09.000Z"
      }
    ]
  ]);
};
