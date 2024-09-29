// src/components/NutritionTips.js
import React from 'react';
import './NutritionTips.css'; // Importing the CSS

const NutritionTips = () => {
    // Example tips data
    const tips = [
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
        <div className="nutrition-tips">
            <h2>Nutrition Tips</h2>
            <div className="tips-container">
                {tips.map((tip) => (
                    <div className="tip-card" key={tip.id}>
                        <img src={tip.image} alt={tip.title} className="tip-image" />
                        <div>
                            <h3>{tip.title}</h3>
                            <ul>
                                {tip.content.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NutritionTips;
