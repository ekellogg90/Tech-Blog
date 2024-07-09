const { BlogPost } = require('../models');

const blogData = [
    {
      name: "How to not burn eggs.",
      description: "Low heat and stir",
      user_id: 1
    },
    {
      name: "Secret to a rum and a coke.",
      description: "Use rum and use coke",
      user_id: 2
    },
    {
      name: "Chess",
      description: "How will I blunder this time?",
      user_id: 3
    },
  ];

  const seedBlogPosts = () => BlogPost.bulkCreate(blogData);

  module.exports = seedBlogPosts;
  