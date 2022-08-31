const Post = require("../models/post");

const util = {
  success: (status, message, data) => {
    return {
      status: status,
      success: true,
      message: message,
      data: data,
    };
  },
  fail: (status, message, log) => {
    return {
      status: status,
      success: false,
      message: message,
      error_log: log,
    };
  },
};

// Add a new post
exports.post = async (req, res) => {
  try {
    if (!req.headers.secret || req.headers.secret != process.env.ADMIN_SECRET) {
      res.status(431).send(util.fail(400, "Admin Authentification Failed"));
    } else {
      let post = new Post();

      post.versions = (({ lang, category, title, body }) => ({
        lang,
        category,
        title,
        body,
      }))(req.body);

      await post.save();

      res.status(200).send(util.success(200, "Post POST Success", post));
    }
  } catch (err) {
    res.status(400).send(util.fail(400, "Post POST Failed", err));
  }
};

// Add a new post
exports.get = async (req, res) => {
  try {
    posts = await Post.aggregate([
      {
        $match: {
          category: req.category,
        },
      },
    ]);
    res.status(200).send(util.success(200, "Post POST Success", posts));
  } catch (err) {
    res.status(400).send(util.fail(400, "Post POST Failed", err));
  }
};
