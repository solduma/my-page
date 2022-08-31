const autoIdSetter = require("../utils/auto-id-setter");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Postings = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: [
    {
      type: {
        type: String,
      },
      content: {
        type: String,
      },
    },
  ],
  edited_datetime: {
    type: Date,
    required: true,
    default: () => Date(),
  },
});

let Post = new Schema(
  {
    lang: {
      type: String,
    },
    category: {
      type: String,
    },
    post_no: {
      type: Number,
      unique: true,
    },
    edit_count: {
      type: Number,
      default: 0,
    },
    versions: [Postings],
    view: {
      type: Number,
      default: 0,
    },
    n_comments: {
      type: Number,
      default: 0,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    collection: "ij_posts",
  }
)

autoIdSetter(Post, mongoose, "ij_posts", "post_no");

module.exports = mongoose.model("Post", Post);