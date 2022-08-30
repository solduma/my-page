const Post = require("../models/post");
const mongoose = require("mongoose");

const util = {
  success: (status, message, data) => {
    return {
      status: status,
      success: true,
      message: message,
      data: data,
    };
  },
  fail: (status, message) => {
    return {
      status: status,
      success: false,
      message: message,
    };
  },
};

// Add a new post
exports.post = async (req, res) => {
  try {
    let post = new Post();

    post.versions = (({ title, body }) => ({
      title,
      body,
    }))(req.body);

    post.path = req.path;

    await post.save();

    res.status(200).send(util.fail(200, "Post POST Success"));
  } catch (err) {
    res.status(400).send(util.fail(400, "Post POST Failed"));
  }
};
