import * as mongoose from 'mongoose';

export const AutomobilesSchema = new mongoose.Schema({
  name: String,
  description: String,
  regnumber: Number,
});
