const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
            attributes: [
                'id',
                'post_title',
                'post_text',
                'user_id'
            ],
            include: [
                {
                    model: User,
                    attributes: ['user_name']
                }
            ]
        })
        .then(postData => {
            const posts = postData.map(post => post.get({ plain: true }));
            res.render('homepage', { posts, logged_in: req.session.logged_in });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// router.get('/dashboard', (req, res) => {

//   res.render('dashboard');
// });


router.get('/dashboard', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: ['user_name'],
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

module.exports = router;