const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors()); 
app.use(express.json());
app.use(cookieParser());

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


const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  name: String,
  picture: String,
  token: String, //JWT token
});

const User = mongoose.model('User', userSchema);

app.post('/api/auth/google', async (req, res) => {
  const { credential } = req.body;

  try {
    const { data } = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`);

    let user = await User.findOne({ googleId: data.sub });
    if (!user) {
      user = await User.create({
        googleId: data.sub,
        email: data.email,
        name: data.name,
        picture: data.picture,
      });
      console.log('New user created:', user); 
      //logic for new user data
    } else {
      console.log('User already exists:', user); 
      //exsiting
    }

    // Generate JWT for the session
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    user.token = token; 
    await user.save(); 
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'Login successful', user, token });
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

