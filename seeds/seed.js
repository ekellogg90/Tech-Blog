const sequelize = require('../config/connection');
const seedBlogPosts = require('./blogData');
const seedComments = require('./commentData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBlogPosts();
  console.log('\n----- Blog Posts SEEDED -----\n');

  await seedComments();
  console.log('\n----- Comments SEEDED -----\n');

  await seedUser();
  console.log('\n----- UsersS SEEDED -----\n');

  process.exit(0);
};

seedAll();
