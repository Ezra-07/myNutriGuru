const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');
const { User, Profile } = require('./models'); // Import models

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173',  // Frontend URL
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Google Auth Route
app.post('/api/auth/google', async (req, res) => {
  const { credential } = req.body;

  try {
    const { data } = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`);
    
    let user = await User.findOne({ email: data.email });
    if (!user) {
      user = await User.create({
        googleId: data.sub,
        email: data.email,
        name: data.name,
        picture: data.picture,
      });
      return res.status(201).json({ message: 'User created successfully', user });
    } else {
      return res.status(200).json({ message: 'User already exists', user });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error authenticating with Google', error });
  }
});
app.post('/api/profile', async (req, res) => {
  const {name, age, gender, weight, height, phone } = req.body;
  try {
    const profile = await Profile.create({
      name,
      age,
      gender,
      weight,
      height,
      phone,
    });

    await profile.save();
    return res.status(201).json({ message: 'Profile created successfully', profile });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating profile', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
