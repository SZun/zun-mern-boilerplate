import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 255
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 1024
  }
});

const User = mongoose.model('users', userSchema);

export default User;
