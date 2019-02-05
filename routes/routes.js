const express = require('express');

const controller = require('../controllers/controllers');

const router = express.Router();

router.get('/posts', controller.getPosts);

router.post('/post', controller.createPost)

module.exports = router;
