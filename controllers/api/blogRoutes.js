const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const newBlog = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['name']
        }
      ],
    });
    res.status(200).json(newBlog);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const newBlog = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name']
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ],
        },
      ],
    });
    if (!newBlog) {
      res.status(400).json({ message: 'No blog post found at this ID' });
      return;
    }
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await BlogPost.create({
      name: req.body.name,
      description: req.body.description,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateBlog = await BlogPost.update({
      name: req.body.name,
      description: req.body.description
    }, {
      where: { id: req.params.id },
    });
    if (!updateBlog[0]) {
      res.status(400).json({ message: "No Post found at this ID" });
      return;
    }
    res.status(200).json(updateBlog);
  } catch (err) {
    res.status(400).json(err);
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(400).json({ message: 'No Blog Post found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
