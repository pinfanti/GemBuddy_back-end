/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('parks').del()
  await knex('parks').insert([
    {
    id: 1,
    park_name: 'Jasper National Park',
    image: '/images/Jasper.jpg',
    city: 'Jasper',
    country: 'Canada',
    description: 'Jasper National Park, located in the Canadian Rockies, is renowned for its stunning mountain landscapes, glaciers, lakes, and abundant wildlife.',
    },
    {
    id: 2,
    park_name: 'Kananaskis Country',
    image: '/images/Kananaskis.jpg',
    city: 'Canmore',
    country: 'Canada',
    description: 'Kananaskis Country offers breathtaking scenery with its rugged mountains, alpine meadows, and pristine lakes, making it a paradise for outdoor enthusiasts.',
    },
    {
    id: 3,
    park_name: 'Waterton Lakes National Park',
    image: '/images/Waterton.jpg',
    city: 'Waterton',
    country: 'Canada',
    description: 'Waterton Lakes National Park, a UNESCO World Heritage Site, boasts stunning mountain vistas, serene lakes, and diverse ecosystems, perfect for hiking and wildlife viewing.',
    },
    {
    id: 4,
    park_name: 'Yoho National Park',
    image: '/images/Yoho.jpg',
    city: 'Field',
    country: 'Canada',
    description: 'Yoho National Park offers awe-inspiring natural wonders including towering waterfalls, ancient glaciers, and unique geological formations, creating an unforgettable wilderness experience.',
    },
    {
    id: 5,
    park_name: 'Kootenay National Park',
    image: '/images/Kootenay.jpg',
    city: 'Radium Hot Springs',
    country: 'Canada',
    description: 'Kootenay National Park showcases pristine wilderness with rugged mountains, turquoise rivers, and abundant wildlife, providing endless opportunities for adventure and relaxation.',
    },
    {
    id: 6,
    park_name: 'Banff National Park',
    image: '/images/Banff.jpg',
    city: 'Banff',
    country: 'Canada',
    description: 'Banff National Park, Canada\'s first national park, offers unparalleled beauty with its stunning mountain vistas, turquoise lakes, and diverse wildlife, attracting millions of visitors each year.',
    },
    {
    id: 7,
    park_name: 'Glacier National Park',
    image: '/images/Glacier.jpg',
    city: 'Golden',
    country: 'Canada',
    description: 'Glacier National Park features rugged mountain landscapes, ancient rainforests, and over 400 glaciers, providing a haven for outdoor enthusiasts and nature lovers alike.',
    },
    {
    id: 8,
    park_name: 'Revelstoke National Park',
    image: '/images/Revelstoke.jpg',
    city: 'Revelstoke',
    country: 'Canada',
    description: 'Revelstoke National Park offers a pristine wilderness with towering peaks, deep valleys, and dense forests, inviting visitors to explore its network of hiking trails and scenic viewpoints.',
    },
  ]);
};
