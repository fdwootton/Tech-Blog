const { Post } = require('../models');

const postData = [
  {
    "post_title": "Styling Help",
    "post_text": "How do I create columns with CSS?",
    "user_id": 1
  },
  {
    "post_title": "Sequelize Success",
    "post_text": "I finally figured out how to populate the tables in my database using Sequelize!",
    "user_id": 2
  },
  {
    "post_title": "Am I the only one...",
    "post_text": "Do you ever code in your dreams?",
    "user_id": 3
  },
  {
    "post_title": "Job Search",
    "post_text": "Yay! I was offered a full time position as a full stack developer!",
    "user_id": 1
  },
  {
    "post_title": "Just need to vent...",
    "post_text": "I've been trying to debug this code all night. Time to take a break.",
    "user_id": 2
  }
];

const seedPostTable = () => Post.bulkCreate(postData);

module.exports = seedPostTable;