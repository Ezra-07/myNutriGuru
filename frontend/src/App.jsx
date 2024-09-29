import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CreateProfile from './components/CreateProfile';
import DashBoard from './components/DashBoard';
import DetailsPage from './components/DetailsPage';
import MealLog from './components/MealLog';

import { UserProvider } from './components/UserContext'; // Import the UserProvider

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/dashboard/*" element={<DashBoard />}/>
          <Route path="/meal-log" element={<MealLog />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
