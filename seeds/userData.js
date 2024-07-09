const { User } = require('../models');

const userData = [
    {
      name: "Eric",
      email: "ekellogg90@gmail.com",
      password: "passwordnumberone"
    },
    {
      name: "Auggie",
      email: "auggiedog@gmail.com",
      password: "passwordnumbertwo"
    },
    {
      name: "Ivan",
      email: "Ivanpuppy@aol.com",
      password: "passwordnumberthree"
    },
  ];
  
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;