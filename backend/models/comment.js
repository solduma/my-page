const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Comment = new Schema({
  comment_no: {
    type: Number
  },
  post_id: { type: Schema.Types.ObjectId, ref: 'Post'},
  commenter_name: { 
    type: String
  },
  status: {
    type: String,
    required: true,
    default: "PO01"
  },
  body: {
    type: String,
    required: true
  },
  commented_datetime: {
    type: Date,
    required: true,
    default: () => Date()
  }
},{
  collection: 'ij_comments'
});

module.exports = mongoose.model('Comment', Comment);