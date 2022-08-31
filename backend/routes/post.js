var express = require('express');
const postControllers = require('../controllers/post');
var postRoutes = express.Router();

// Create posts
postRoutes.post('/post', postControllers.post);

// Read posts
postRoutes.post('/', postControllers.get);

module.exports = postRoutes;
