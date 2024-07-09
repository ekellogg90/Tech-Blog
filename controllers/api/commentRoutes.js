const router = require("express").Router();
const { BlogPost, Comment, User } = require("../../models");

router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        include: [
            {
                model: User,
                attributes: ['name'],
            },
            {
                model: BlogPost,
                attributes: ['id'],
            },
        ],
      });
      res.status(200).json(commentData);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });
  
  router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.create({
        comment: req.body.comment,
        blogPost_id: req.body.blogPost_id,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async (req, res) => {
    try {
        const updateComment = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!updateComment[0]) {
            res.status(400).json({ message: 'No comment found at this ID' });
            return;
        }
        res.status(200).json(updateComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!comment) {
            res.status(400).json({ message: 'No comment found to delete at this ID' });
            return;
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;