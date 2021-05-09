const { User } = require('../models');

const userData = [
  {
    "user_name": "Sal",
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "user_name": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
    "user_name": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "password12345"
  }
];

const seedUserTable = () => User.bulkCreate(userData);

module.exports = seedUserTable;
