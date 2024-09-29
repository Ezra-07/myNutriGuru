// src/components/ImageSlider.jsx
import React, { useState } from 'react';
import './style.css'; // Ensure this file exists

const images = [
    '/first.png', // First image (non-clickable)
    '/ai_2.jpg',
    '/image3.jpg',
    '/image4.jpg',
];

const urls = [
    '', // No URL for the first image
    'https://example.com/page2', // URL for second image
    'https://example.com/page3', // URL for third image
    'https://example.com/page4', // URL for fourth image
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleImageClick = (index) => {
        if (index !== 0) { // Allow click for all images except the first one
            window.open(urls[index], '_blank'); // Open the corresponding URL in a new tab
        }
    };

    return (
        <div className="slider-frame">
            <div className="slide-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((img, index) => (
                    <div className="img-container" key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            style={index !== 0 ? { cursor: 'pointer' } : {}}
                            onClick={() => handleImageClick(index)}
                        />
                    </div>
                ))}
            </div>
            <button className="prev" onClick={goToPrevious}>❮</button>
            <button className="next" onClick={goToNext}>❯</button>
        </div>
    );
};

export default ImageSlider;
