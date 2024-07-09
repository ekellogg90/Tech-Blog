const { Comment } = require('../models');

const commentData = [
    {
      body: "Comment number 1",
      date_created: "July 7, 2024",
      user_id: 1,
      blogPost_id: 1
    },
    {
      body: "Comment number 2",
      date_created: "July 8, 2024",
      user_id: 2,
      blogPost_id: 2
    },
    {
      body: "Comment number 3",
      date_created: "July 9, 2024",
      user_id: 3,
      blogPost_id: 3
    },
    {
      body: "Comment number 4",
      date_created: "July 10, 2024",
      user_id: 1,
      blogPost_id: 2
    },
    {
      body: "Comment number 5",
      date_created: "July 11, 2024",
      user_id: 1,
      blogPost_id: 3
    },
    {
      body: "Comment number 6",
      date_created: "July 12, 2024",
      user_id: 2,
      blogPost_id: 3
    },
  ];

  const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;