import pizza from '../assets/images/temp/pizza.svg';
import burger from '../assets/images/temp/burger.svg';
import boneBroth from '../assets/images/temp/bone-broth.svg';
import chickenKare from '../assets/images/temp/list-1.svg';
import sandwich from '../assets/images/temp/sandwich.svg';
import bombChicken from '../assets/images/temp/list-2.svg';
import anya from '../assets/images/temp/anya.png';
// Popular recipe dummy data

const recipeDummy = [
  {
    id: 1,
    title: 'Pizza Lamoa',
    image: pizza,
  },
  {
    id: 2,
    title: 'King Burger',
    image: burger,
  },
];

// New recipe dummy data
const newRecipeDummy = [
  {
    id: 3,
    title: 'Healthy Bone Broth Ramen',
    image: boneBroth,
  },
];

// Recipe list dummy data
const recipeListDummy = [
  {
    id: 4,
    title: 'Chicken Kare',
    image: chickenKare,
  },
  {
    id: 5,
    title: 'Bomb Chicken',
    image: bombChicken,
  },
  {
    id: 6,
    title: 'Banana Smothie Popa',
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
  image: sandwich,
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
    image: anya,
  },
];

const myRecipeDummy = [...recipeListDummy];
const savedRecipeDummy = [recipeListDummy?.[2], recipeListDummy?.[3]];
const likedRecipeDummy = [recipeListDummy?.[3], recipeListDummy?.[4]];

const userDummy = {
  image: anya,
  name: 'Anya Geraldine',
  email: 'anyageraldine@gmail.com',
  password: '1234',
  phonenumber: '081297915965',
};

export {
  recipeDummy,
  newRecipeDummy,
  recipeListDummy,
  detailRecipeDummy,
  commentUserDummy,
  myRecipeDummy,
  savedRecipeDummy,
  likedRecipeDummy,
  userDummy,
};
