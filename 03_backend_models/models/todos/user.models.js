// mongoose helps on making models

import mongoose from 'mongoose';
// it helps in making schema and schema is a method which take object
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

// iss schema ko export karte hai

// aur schema kaha banayega? mongodb mai

// model take 2 parameters kya model banau  i.e. user and kiske basis par banau userSchema ke basis par
export const User = mongoose.model('User', userSchema);

// User saved into mongoDB as users
