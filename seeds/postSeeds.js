const { Post } = require('../models');

const postData = [
  {
    "post_text": "How do I create columns with CSS?",
    "user_id": 1
  },
  {
    "post_text": "I finally figured out how to populate the tables in my database using Sequelize!",
    "user_id": 2
  },
  {
    "post_text": "Do you ever code in your dreams?",
    "user_id": 3
  },
  {
    "post_text": "Yay! I was offered a full time position as a full stack developer!",
    "user_id": 1
  },
  {
    "post_text": "I've been trying to debug this code all night. Time to take a break.",
    "user_id": 2
  }
];

const seedPostTable = () => Post.bulkCreate(postData);

module.exports = seedPostTable;