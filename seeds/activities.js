/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('activities').del()
    await knex('activities').insert([
        [
            {
              "id": 1,
              "park_id": 1,
              "activitie": "Trails",
              "image": "images/Hiking.jpg",
              "description": "Hiking in the Canadian Rockies offers adventurers a chance to immerse themselves in the stunning natural beauty of the mountainous landscape."
            },
            {
              "id": 2,
              "park_id": 1,
              "activitie": "Wildlife Viewing",
              "image": "images/Wildlife.jpg",
              "description": "Wildlife viewing in the Canadian Rockies is an unforgettable experience, offering the opportunity to encounter a diverse array of iconic wildlife species in their natural habitats."
            },
            {
              "id": 3,
              "park_id": 1,
              "activitie": "Camping",
              "image": "images/Camping.jpg",
              "description": "Camping in the Canadian Rockies offers adventurers a chance to truly immerse themselves in the breathtaking beauty of the natural landscape."
            },
            {
              "id": 4,
              "park_id": 1,
              "activitie": "Lakes",
              "image": "images/Lakes.jpg",
              "description": "The Canadian Rockies are dotted with an abundance of stunning lakes, each offering its own unique beauty and recreational opportunities."
            },
            {
              "id": 5,
              "park_id": 1,
              "activitie": "Food",
              "image": "images/Food.jpg",
              "description": "Exploring the Canadian Rockies isn't just about outdoor adventures; it's also a culinary journey filled with delicious flavors and local delicacies."
            },
            {
              "id": 6,
              "park_id": 1,
              "activitie": "Sports",
              "image": "images/Sports.jpg",
              "description": "The Canadian Rockies are a playground for outdoor enthusiasts, offering a wide range of exhilarating sports activities against a backdrop of stunning natural beauty."
            },
            {
              "id": 7,
              "park_id": 2,
              "activitie": "Trails",
              "image": "images/Hiking.jpg",
              "description": "Hiking in the Canadian Rockies offers adventurers a chance to immerse themselves in the stunning natural beauty of the mountainous landscape."
            },
            {
              "id": 8,
              "park_id": 2,
              "activitie": "Wildlife Viewing",
              "image": "images/Wildlife.jpg",
              "description": "Wildlife viewing in the Canadian Rockies is an unforgettable experience, offering the opportunity to encounter a diverse array of iconic wildlife species in their natural habitats."
            },
            {
              "id": 9,
              "park_id": 2,
              "activitie": "Camping",
              "image": "images/Camping.jpg",
              "description": "Camping in the Canadian Rockies offers adventurers a chance to truly immerse themselves in the breathtaking beauty of the natural landscape."
            },
            {
              "id": 10,
              "park_id": 2,
              "activitie": "Lakes",
              "image": "images/Lakes.jpg",
              "description": "The Canadian Rockies are dotted with an abundance of stunning lakes, each offering its own unique beauty and recreational opportunities."
            },
            {
              "id": 11,
              "park_id": 3,
              "activitie": "Food",
              "image": "images/Food.jpg",
              "description": "Exploring the Canadian Rockies isn't just about outdoor adventures; it's also a culinary journey filled with delicious flavors and local delicacies."
            },
            {
              "id": 12,
              "park_id": 3,
              "activitie": "Food",
              "image": "images/Food.jpg",
              "description": "Exploring the Canadian Rockies isn't just about outdoor adventures; it's also a culinary journey filled with delicious flavors and local delicacies."
            },
            {
              "id": 13,
              "park_id": 4,
              "activitie": "Sports",
              "image": "images/Sports.jpg",
              "description": "The Canadian Rockies are a playground for outdoor enthusiasts, offering a wide range of exhilarating sports activities against a backdrop of stunning natural beauty."
            },
            {
              "id": 14,
              "park_id": 5,
              "activitie": "Trails",
              "image": "images/Hiking.jpg",
              "description": "Hiking in the Canadian Rockies offers adventurers a chance to immerse themselves in the stunning natural beauty of the mountainous landscape."
            },
            {
              "id": 15,
              "park_id": 6,
              "activitie": "Wildlife Viewing",
              "image": "images/Wildlife.jpg",
              "description": "Wildlife viewing in the Canadian Rockies is an unforgettable experience, offering the opportunity to encounter a diverse array of iconic wildlife species in their natural habitats."
            },
            {
              "id": 16,
              "park_id": 7,
              "activitie": "Camping",
              "image": "images/Camping.jpg",
              "description": "Camping in the Canadian Rockies offers adventurers a chance to truly immerse themselves in the breathtaking beauty of the natural landscape."
            },
            {
              "id": 17,
              "park_id": 8,
              "activitie": "Lakes",
              "image": "images/Lakes.jpg",
              "description": "The Canadian Rockies are dotted with an abundance of stunning lakes, each offering its own unique beauty and recreational opportunities."
            }
          ]
          
      
    ]);
  };