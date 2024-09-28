// server.js
const express = require('express');
const mongoose = require('mongoose'); // Only if using MongoDB
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const axios = require('axios');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Adjust the origin to your frontend's URL
app.use(express.json());
app.use(cookieParser());

// Check for MONGO_URI environment variable
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MongoDB connection string (MONGO_URI) is not defined in the environment variables.');
  process.exit(1); // Exit the process if the connection string is missing
}

// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if the connection fails
  });

// User schema
const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  name: String,
  picture: String,
  token: String, // Field to store JWT token
});

const User = mongoose.model('User', userSchema);

// Route to handle Google OAuth token verification
app.post('/api/auth/google', async (req, res) => {
  const { credential } = req.body;

  try {
    // Verify the token with Google
    const { data } = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`);

    // Check if user already exists in DB
    let user = await User.findOne({ googleId: data.sub });
    if (!user) {
      // Create a new user if not exists
      user = await User.create({
        googleId: data.sub,
        email: data.email,
        name: data.name,
        picture: data.picture,
      });
      console.log('New user created:', user); // Log when a new user is created
    } else {
      console.log('User already exists:', user); // Log if user already exists
    }

    // Generate JWT for the session
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Store the token in the user document
    user.token = token; // Save the token to the user's document
    await user.save(); // Persist the change in the database

    // Set token in cookies or send in response
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    // Improved error handling
    if (error.response) {
      // Error from Google API
      console.error('Error verifying Google token:', error.response.data);
      res.status(400).json({ message: 'Invalid Google token' });
    } else {
      // Other types of errors
      console.error('Unexpected error:', error);
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
});


// Protected route example
app.get('/api/dashboard', (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.send('Protected data');
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

