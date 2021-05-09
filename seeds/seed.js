const sequelize = require('../config/connection');

const seedPostTable = require('./postSeeds');
const seedUserTable = require('./userSeeds');



const seedDB = async () => {
  await sequelize.sync({ force: true });
  console.log('\n >>> DATABASE SEEDED <<< \n');
  
  await seedUserTable();
  console.log('\n >>> USER DATA SEEDED TO TECH_BLOG_DB <<< \n');

  await seedPostTable();
  console.log('\n >>> POST DATA SEEDED TO TECH_BLOG_DB <<< \n');

  process.exit(0);
};

seedDB();