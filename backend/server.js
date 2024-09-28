const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // or your frontend's URL
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MongoDB connection string (MONGO_URI) is not defined in the environment variables.');
  process.exit(1); 
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  });

// User schema
const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  name: String,
  picture: String,
  token: String, // JWT token
});

const User = mongoose.model('User', userSchema);

// Google Auth Route
app.post('/api/auth/google', async (req, res) => {
  const { credential } = req.body;

  try {
    // Verify the Google token
    const { data } = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`);

    // Check if user exists based on email
    let user = await User.findOne({ email: data.email });
    if (!user) {
      // Create a new user if they don't exist
      user = await User.create({
        googleId: data.sub,
        email: data.email,
        name: data.name,
        picture: data.picture,
      });
      console.log('New user created:', user);
    } else {
      console.log('User already exists:', user);
    }

    // Generate JWT for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    user.token = token; // Save the token to the user's document
    await user.save(); // Persist the change in the database

    // Set the token in cookies
    res.cookie('token', token, { httpOnly: true });

    // Send back a response
    res.status(200).json({ message: user ? 'Login successful' : 'User created successfully', user, token });
  } catch (error) {
    if (error.response) {
      console.error('Error verifying Google token:', error.response.data);
      res.status(400).json({ message: 'Invalid Google token' });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
});

// Root route for protected data
app.get('/', (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.send('Protected data'); // Change this to send actual data if needed
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
