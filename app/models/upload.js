const mongoose = require('mongoose')
// const Comment = require('./comment')
// const commentSchema = mongoose.model('Comment').schema

const uploadSchema = new mongoose.Schema({
  fileType: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  comments: [{
    text: String,
    date: Date,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  likes: [],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Upload', uploadSchema)
