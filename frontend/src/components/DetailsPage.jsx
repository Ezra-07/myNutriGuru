// src/components/DetailsPage.js
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const { id } = useParams();  // Get the topic id from the URL parameters
    const contentRef = useRef(null);  // Create a ref for the content section

    // In a real application, you would fetch or look up the details based on the id.
    const topicDetails = {
        1: {
            title: 'Importance of Vitamin C',
            content: 'Vitamin C is essential for the growth, development, and repair of all body tissues. It is also important for the functioning of the immune system.',
            image: '/image2.jpg',
        },
        2: {
            title: 'Benefits of Leafy Greens',
            content: 'Leafy greens are packed with vitamins, minerals, and fiber but low in calories. They can help reduce the risk of chronic diseases.',
            image: '/image2.jpg',
        },
        3: {
            title: 'Power of Omega-3 Fatty Acids',
            content: 'Omega-3 fatty acids are incredibly important for heart and brain health. They can help reduce inflammation and promote heart health.',
            image: '/image3.jpg',
        },
        4: {
            title: 'Power of Omega-3 Fatty Acids',
            content: 'Omega-3 fatty acids are incredibly important for heart and brain health. They can help reduce inflammation and promote heart health.',
            image: '/image3.jpg',
        },
    };

    const topic = topicDetails[id];
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [topic]);

    return (
        <>
            <div className="details-page">
                {topic ? (
                    <>
                        <h2>{topic.title}</h2>
                        <img src={topic.image} alt={topic.title} />
                        <div ref={contentRef}>
                            <p>{topic.content}</p>
                        </div>
                    </>
                ) : (
                    <p>Topic not found!</p>
                )}
            </div>
        </>
    );
};

export default DetailsPage;
