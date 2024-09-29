import React from 'react'
import MyNavbar from './MyNavbar'
import './DashBoard.css';
import Card from './Card';
import NutritionTips from './NutritionTips';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './DetailsPage'; // Page for "Learn More" button
import Footer from './Footer';
function DashBoard() {
  const nutritionTopics = [
    {
        image: '/real1.jpg',
        title: 'Intermittent Fasting',
        description: 'Intermittent fasting (IF) alternates between eating and fasting, supporting weight loss, metabolism, heart health, and mental clarity.',
        id: 1,
    },
    {
        image: '/real2.png',
        title: 'Nutri Score',
        description: 'Nutri-Score is a front-of-pack label that rates the nutritional quality of food products on a color-coded scale from A (healthiest) to E, helping consumers make healthier choices.',
        id: 2,
    },
    {
        image: '/diet.png',
        title: 'The Mind Diet',
        description: 'The MIND diet combines the Mediterranean and DASH diets, focusing on brain-healthy foods to potentially reduce Alzheimer\'s risk.',
        id: 3,
    },
    {
        image: '/Millets.png',
        title: 'Millet\'s Nutrient Treasure',
        description: 'Explore how millets are the hidden treasure of fibers, proteins, and essential nutrients, unlocking a path to better health and sustainable farming.',
        id: 4,
    },
];
const nutritionTips = [
    {
        id: 1,
        title: "Importance of Vitamin C",
        image: "/vitamina-C.jpg", // Ensure the image path is correct
        content: [
            "Helps in tissue repair.",
            "Boosts the immune system.",
            "Aids in iron absorption."
        ]
    },
    {
        id: 2,
        title: "Benefits of Leafy Greens",
        image: "/LeafyGreen.jpg", // Ensure the image path is correct
        content: [
            "Rich in vitamins and minerals.",
            "Low in calories.",
            "Improves heart health."
        ]
    },
    {
        id: 3,
        title: "Power of Omega-3 Fatty Acids",
        image: "/Omega3.jpg", // Ensure the image path is correct
        content: [
            "Supports heart health.",
            "Reduces inflammation.",
            "Improves brain function."
        ]
    }
];
  return (
    <>
      <MyNavbar/>
        <div className="DashBoard">
            <img src="/first.png" id='main'/>
            <main>
                <section className="cards-section">
                    <h2>Nutrition Digest</h2>
                    <div className="cards-container">
                            {nutritionTopics.map((topic, index) => (
                                <Card key={index} topic={topic} />
                            ))}
                    </div>
                </section>
            </main>
            <NutritionTips tips={nutritionTips} />
            <Routes>
                <Route path="/details/:id" element={<DetailsPage />} />
            </Routes>
            <Footer /> 
        </div>
    </>
  )
}

export default DashBoard