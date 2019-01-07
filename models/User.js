import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    index: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1024
  }
});

const User = mongoose.model('User', userSchema);

export default User;
