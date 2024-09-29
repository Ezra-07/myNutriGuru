import React from 'react';
import './WelcomePage.css';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/google', {
        credential: credentialResponse.credential,
      });
      const user = response.data.user; 
      if (response.status === 201) {
        console.log('User created:', user);
        navigate('/create-profile');
      } else if (response.status === 200) {
        console.log('User already exists:', user);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <div className="welcome-page">
      <section className="hero">
        <img src="./src/assets/logo1.png" alt="Logo" />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Nutrition Checker</h1>
          <p className="hero-subtitle">Your personalized guide to healthy eating</p>
          <div className="hero-buttons">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
              className=".primary-btn"
              text="Get Started"
            />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-intro">
          <h2>How We Help You Eat Healthier</h2>
          <p>Check nutritional information, get personalized meal plans, and track your food intake for a healthier lifestyle.</p>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Nutrition Facts</h3>
            <p>Quickly check the nutritional value of the foods you eat, including calories, proteins, fats, and more.</p>
          </div>
          <div className="feature-item">
            <h3>Personalized Meal Plans</h3>
            <p>Receive meal plans tailored to your specific dietary needs and fitness goals.</p>
          </div>
          <div className="feature-item">
            <h3>Track Your Progress</h3>
            <p>Track your food intake and monitor your progress towards achieving your health goals.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
