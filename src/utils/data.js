// Popular recipe dummy data
const recipeDummy = [
  {
    id: 1,
    title: 'Pizza Lamoa',
    image: '/images/temp/pizza.svg',
  },
  {
    id: 2,
    title: 'King Burger',
    image: '/images/temp/burger.svg',
  },
];

// New recipe dummy data
const newRecipeDummy = [
  {
    id: 3,
    title: 'Healthy Bone Broth Ramen',
    image: '/images/temp/bone-broth.svg',
  },
];

// Recipe list dummy data
const recipeListDummy = [
  {
    id: 4,
    title: 'Chicken Kare',
    image: '/images/temp/list-1.svg',
  },
  {
    id: 5,
    title: 'Bomb Chicken',
    image: '/images/temp/list-2.svg',
  },
  {
    id: 6,
    title: 'Banana Smothie Pop',
    image: '/images/temp/list-3.svg',
  },
  {
    id: 7,
    title: 'Coffe Lava Cake',
    image: '/images/temp/list-4.svg',
  },
  {
    id: 8,
    title: 'Sugar Salmon',
    image: '/images/temp/list-5.svg',
  },
  {
    id: 9,
    title: 'Indian Salad',
    image: '/images/temp/list-6.svg',
  },
];

// Detail recipe dummy

const detailRecipeDummy = {
  id: 10,
  title: 'Sandwich',
  image: '/images/temp/sandwich.svg',
  ingredients: [
    '2 Eggs',
    '2 Tbsp Mayonnaise',
    '3 Slices bread',
    'A little butter',
    '1/3 Carton of chess',
    '2-3 Slices of tomato or a lettuce leaf and a slice of ham or cheese',
    'Crisp, to serve',
  ],
  videos: [
    'https://www.youtube.com/watch?v=Bo-_6SWkMoE',
    'https://www.youtube.com/watch?v=8NnQs3EtoqU',
    'https://www.youtube.com/watch?v=VyPwEZTIpVc',
  ],
};

const commentUserDummy = [
  {
    username: 'Mikhael Kevin',
    comment: 'Nice recipe. Simple and delicious, thankyou!',
    image: '/images/temp/test.jpg',
  },
  {
    username: 'Anya Geraldine',
    comment: 'Nice recipe. Simple and delicious, thankyou!',
    image: '/images/temp/anya.png',
  },
];

module.exports = {
  recipeDummy,
  newRecipeDummy,
  recipeListDummy,
  detailRecipeDummy,
  commentUserDummy,
};
