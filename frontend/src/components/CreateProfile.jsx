import React, { useState } from 'react';
import './CreateProfile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/profile', {
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        weight: formData.weight,
        height: formData.height,
        phone: formData.phone,
      });
  
      console.log('Profile created successfully:', response.data);
      alert('Profile created successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };
  

  return (
    <div className="container-p">
      <h2>Create New Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Weight (in kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Height (in cm):</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;
