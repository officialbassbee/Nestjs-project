import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    unique: true,
    required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
  body: {
    type: String,
    required: true,
  },

  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});
