const express = require('express');
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const UserPostController = require('./controllers/UserPostController');

const router = express.Router();

router.get('/list', (req, res) => { return res.send("/list LISTAAAAA"); });

router.get('/list/users', UserController.index);
router.get('/list/posts', PostController.index);

router.get('/list/users/:id', UserController.search);
router.get('/list/posts/:id', PostController.search);
router.get('/list/user_posts/:id', UserPostController.index);

router.post('/register/users', UserController.create);
router.post('/register/posts', PostController.create);
router.post('/register/user_posts', PostController.create);

router.put('/update/users/:id', UserController.update);
router.put('/update/posts/:id', PostController.update);
router.put('/update/user_posts/:id', PostController.update);

router.delete('/delete/users/:id', UserController.destroy);
router.delete('/delete/posts/:id', PostController.destroy);
router.delete('/delete/user_posts/:id', PostController.destroy);

module.exports = router;