import mongoose from 'mongoose'

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type:String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  likes: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true
});

export const BlogPost = mongoose.model('BlogPost', blogPostSchema);