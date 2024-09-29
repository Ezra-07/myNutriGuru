// models.js
const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  name: String,
  picture: String,
});

// Profile Schema
const profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  weight: Number,
  height: Number,
  phone: String,
});

// Create models
const User = mongoose.model('User', userSchema);
const Profile = mongoose.model('Profile', profileSchema);

module.exports = { User, Profile };
