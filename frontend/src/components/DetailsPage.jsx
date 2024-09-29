// src/components/DetailsPage.js
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';

const DetailsPage = () => {
    const { id } = useParams(); // Get the topic id from the URL parameters
    const contentRef = useRef(null); // Create a ref for the content section

    // In a real application, you would fetch or look up the details based on the id.
    const topicDetails = {
        1: {
            title: 'Intermittent Fasting',
            content: `
                <h3>What is Intermittent Fasting?</h3>
                <p>Intermittent Fasting (IF) is an eating pattern that alternates between periods of eating and fasting. It helps with weight loss, metabolism, heart health, and mental clarity by allowing your body to burn stored fat during fasting.</p>
                
                <h4>Popular Methods</h4>
                <ul>
                    <li><strong>16/8 Method:</strong> Fast for 16 hours, eat in an 8-hour window.</li>
                    <li><strong>5:2 Method:</strong> Eat normally for five days, consume 500–600 calories on two days.</li>
                    <li><strong>Eat-Stop-Eat:</strong> Fast for 24 hours once or twice a week.</li>
                </ul>
                
                <h4>Benefits</h4>
                <ul>
                    <li><strong>Weight Loss:</strong> Reduces calorie intake and promotes fat burning.</li>
                    <li><strong>Boosts Metabolism:</strong> Increases calorie-burning efficiency.</li>
                    <li><strong>Improves Heart & Brain Health:</strong> Reduces cholesterol and supports mental clarity.</li>
                </ul>
                
                <h4>Getting Started</h4>
                <ul>
                    <li><strong>Begin Slowly:</strong> Try a 12/12 fasting schedule.</li>
                    <li><strong>Stay Hydrated:</strong> Drink water during fasting.</li>
                    <li><strong>Listen to Your Body:</strong> Adjust if you feel unwell.</li>
                </ul>
                
                <p>Intermittent fasting is a simple, flexible approach to improve health and support weight loss.</p>
            `,
            image: '/Intermittent_Fasting_2.jpg',
        },
        2: {
            title: 'Nutri Score',
            content:`
                <h2>What is Nutri Score?</h2>
                <p>Nutri Score is a front-of-pack labeling system that helps consumers evaluate the nutritional quality of food products at a glance. 
                It uses a color-coded scale from A (healthiest) to E (least healthy) based on the product’s nutritional composition. By simplifying complex nutritional information, Nutri Score empowers shoppers to make healthier choices while navigating grocery store aisles.</p>

                <h3>How Nutri Score Works</h3>
                <p>The Nutri Score is derived from a scoring system that accounts for both positive and negative nutritional factors:</p>
                <ul>
                    <li><strong>Negative Factors:</strong> Energy (calories), sugars, saturated fats, and sodium.</li>
                    <li><strong>Positive Factors:</strong> Fiber, protein, and the proportion of fruits, vegetables, legumes, nuts, and oils.</li>
                </ul>
                <p>The final score is converted into a letter grade displayed prominently on product packaging, often with a corresponding color code that ranges from green (A) to red (E), facilitating quick comparisons between products.</p>

                <h3>Benefits of Nutri Score</h3>
                <ul>
                    <li><strong>Encourages Healthier Choices:</strong> Nutri Score helps consumers easily identify healthier food options, contributing to better dietary habits and overall health.</li>
                    <li><strong>Promotes Transparency:</strong> The system fosters clarity in food labeling, allowing consumers to compare products and make informed decisions.</li>
                    <li><strong>Supports Public Health Initiatives:</strong> Nutri Score aligns with efforts to combat obesity and promote healthier eating patterns in the population.</li>
                    <li><strong>Encourages Reformulation:</strong> Food manufacturers are motivated to improve product formulations to achieve higher Nutri Scores, leading to healthier options in the market.</li>
                </ul>

                <h3>Consumer Impact</h3>
                <p>Research shows that Nutri Score positively influences consumer behavior, leading to healthier purchasing decisions. As shoppers become familiar with the scoring system, they develop better nutritional literacy, fostering long-term healthy eating habits.</p>

                <h3>Conclusion</h3>
                <p>Nutri Score is a valuable tool that simplifies the assessment of nutritional quality, enabling consumers to make informed dietary choices. By promoting transparency and encouraging healthier eating patterns, Nutri Score plays a significant role in improving public health and wellness.</p>
                `,
            image: '/nutriscore_2.jpg',
        },
        3: {
            title: 'Mind diet',
            content: `
                <h2>What is The MIND Diet?</h2>
                <p>The MIND Diet (Mediterranean-DASH Diet Intervention for Neurodegenerative Delay) is a dietary plan that combines elements from the Mediterranean and DASH diets, focusing specifically on foods that support brain health. This diet aims to reduce the risk of Alzheimer’s disease and cognitive decline by emphasizing nutrient-rich foods known for their protective benefits.</p>

                <h3>Key Components of The MIND Diet</h3>
                <p>The MIND Diet encourages the consumption of certain foods while limiting others:</p>
                <h4>Foods to Emphasize:</h4>
                <ul>
                    <li><strong>Leafy Greens:</strong> Spinach, kale, and other greens are high in vitamins and antioxidants.</li>
                    <li><strong>Berries:</strong> Blueberries and strawberries boost memory and cognitive function.</li>
                    <li><strong>Nuts:</strong> Particularly walnuts, which are rich in healthy fats and vitamin E.</li>
                    <li><strong>Whole Grains:</strong> Brown rice and whole grain bread support steady energy levels.</li>
                    <li><strong>Fish:</strong> Fatty fish like salmon provide essential omega-3 fatty acids.</li>
                    <li><strong>Olive Oil:</strong> A healthy fat that is central to both Mediterranean and DASH diets.</li>
                </ul>
                <h4>Foods to Limit:</h4>
                <ul>
                    <li><strong>Red Meat:</strong> High consumption is linked to increased cognitive decline.</li>
                    <li><strong>Butter and Margarine:</strong> Should be minimized in favor of healthier fats.</li>
                    <li><strong>Sweets and Pastries:</strong> High in added sugars, which can negatively impact brain health.</li>
                </ul>

                <h3>Health Benefits of The MIND Diet</h3>
                <ul>
                    <li><strong>Cognitive Protection:</strong> The diet may lower the risk of Alzheimer’s and improve cognitive function.</li>
                    <li><strong>Heart Health:</strong> Emphasizes foods that also promote cardiovascular health, which is closely related to brain health.</li>
                    <li><strong>Weight Management:</strong> Focus on whole foods can assist in maintaining a healthy weight.</li>
                </ul>

                <h3>Getting Started with The MIND Diet</h3>
                <ul>
                    <li><strong>Add Brain-Healthy Foods:</strong> Gradually incorporate more leafy greens, berries, and nuts into your meals.</li>
                    <li><strong>Plan Ahead:</strong> Create meal plans that feature MIND Diet foods.</li>
                    <li><strong>Stay Active:</strong> Combine the diet with regular physical activity for better health outcomes.</li>
                </ul>

                <h3>Conclusion</h3>
                <p>The MIND Diet is a practical approach to eating that focuses on foods that support brain health and may reduce the risk of cognitive decline. By incorporating these principles into your daily routine, you can promote better cognitive function and overall wellness.</p>
                `,
            image: '/mind-diet-2.jpg',
        },
        4: {
            id: 4,
            title: "Millet's Nutrient Treasure",
            image: "/millet.jpg", // Ensure the image path is correct
            content:`
                    <h2>Millets: The Hidden Treasure of the Grain World</h2>
                    <p>Millets, often referred to as the hidden treasure of the grain world, are nutrient-dense cereals that provide an array of health benefits. These ancient grains have been cultivated for thousands of years, particularly in Asia and Africa, and are now gaining recognition for their exceptional nutritional profile and versatility in cooking.</p>

                    <h3>Nutritional Benefits of Millets</h3>
                    <ul>
                        <li><strong>Rich in Dietary Fiber:</strong> Millets are an excellent source of dietary fiber, which promotes digestive health, helps maintain a healthy weight, and can lower cholesterol levels. The high fiber content also aids in stabilizing blood sugar levels, making millets a beneficial choice for individuals with diabetes.</li>
                        <li><strong>High in Protein:</strong> Compared to other grains, millets have a higher protein content, providing essential amino acids that support muscle health, tissue repair, and overall bodily functions. This makes millets an excellent source of plant-based protein for vegetarians and vegans.</li>
                        <li><strong>Packed with Essential Nutrients:</strong> Millets are rich in vital vitamins and minerals, including B vitamins (such as niacin, thiamine, and riboflavin), iron, magnesium, potassium, and phosphorus. These nutrients play crucial roles in energy production, maintaining healthy bones, and supporting various metabolic functions.</li>
                        <li><strong>Antioxidant Properties:</strong> Millets contain antioxidants like phenolic compounds, which help protect the body from oxidative stress and inflammation. These properties can contribute to a lower risk of chronic diseases, including heart disease and certain cancers.</li>
                    </ul>

                    <h3>Health Benefits of Millets</h3>
                    <ul>
                        <li><strong>Heart Health:</strong> The combination of fiber, healthy fats, and antioxidants in millets supports cardiovascular health by reducing cholesterol levels and improving blood circulation.</li>
                        <li><strong>Weight Management:</strong> Due to their high fiber content, millets promote satiety, helping control appetite and aiding in weight loss or maintenance.</li>
                        <li><strong>Digestive Health:</strong> Millets enhance digestive health by promoting regular bowel movements and preventing constipation.</li>
                        <li><strong>Blood Sugar Control:</strong> The low glycemic index of millets means they release glucose slowly into the bloodstream, making them ideal for maintaining stable blood sugar levels.</li>
                    </ul>

                    <h3>Sustainability of Millets</h3>
                    <p>In addition to their health benefits, millets are an environmentally friendly choice. They require significantly less water compared to traditional cereals like rice and wheat, making them suitable for arid and semi-arid regions. Millets are drought-resistant and can thrive in poor soil conditions, contributing to food security in vulnerable areas.</p>

                    <p>Growing millets also supports biodiversity, as they can be cultivated alongside other crops, promoting sustainable agricultural practices. By incorporating millets into our diets, we not only enhance our nutritional intake but also support sustainable farming and help protect the environment.</p>

                    <h3>How to Incorporate Millets into Your Diet</h3>
                    <ul>
                        <li><strong>Versatile Cooking Options:</strong> Millets can be cooked as a grain, used in porridge, or ground into flour for baking. They can be added to salads, soups, and casseroles for added nutrition.</li>
                        <li><strong>Experiment with Different Varieties:</strong> Common types of millets include pearl millet, finger millet, foxtail millet, and barnyard millet. Each variety has its unique flavor and texture, providing a range of options to suit different culinary preferences.</li>
                        <li><strong>Combine with Other Ingredients:</strong> Millets can be paired with vegetables, legumes, and healthy fats to create balanced meals that are both nutritious and delicious.</li>
                    </ul>

                    <h3>Conclusion</h3>
                    <p>Millets are truly a nutritional treasure, offering a wealth of health benefits while promoting sustainable farming practices. By integrating millets into our diets, we can improve our health and contribute to a more sustainable food system. Embracing these ancient grains not only enriches our meals but also honors a tradition of wholesome, environmentally friendly eating.</p>
                    `,
            image: '/millets_2.jpg',
        },
    };

    const topic = topicDetails[id];
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [topic]);

    return (
        <div className="details-page">
            {topic ? (
                <>
                    <h2>{topic.title}</h2>
                    <img src={topic.image} alt={topic.title} />
                    <div ref={contentRef} dangerouslySetInnerHTML={{ __html: topic.content }} />
                </>
            ) : (
                <p>Topic not found!</p>
            )}
        </div>                  
    );
};

export default DetailsPage;
