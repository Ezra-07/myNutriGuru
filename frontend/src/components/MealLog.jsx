import React, { useState } from 'react';
import './MealLog.css'; // CSS for styling
import MyNavbar from './MyNavbar';
import axios from 'axios'; 
import { Pie } from 'react-chartjs-2'; // Import Pie chart component
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MealLog = () => {
    const [mealName, setMealName] = useState('');
    const [amountConsumed, setAmountConsumed] = useState(0);
    const [mealLogs, setMealLogs] = useState([]);
    const [apiKey] = useState('H2l+1NwWlNflH1D4HjpzAw==vCOQ3bVXkjImEh9r'); 

    const fetchNutritionData = async (mealName) => {
        try {
            const response = await axios.get(
                `https://api.calorieninjas.com/v1/nutrition?query=${mealName}`,
                { headers: { 'X-Api-Key': apiKey } }
            );
            return response.data.items[0];
        } catch (error) {
            console.error("Error fetching data from CalorieNinjas", error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!mealName || amountConsumed <= 0) {
            alert("Please enter a valid meal and a positive amount.");
            return;
        }

        const nutritionData = await fetchNutritionData(mealName);
        if (!nutritionData) {
            alert("Could not fetch nutrition data.");
            return;
        }

        const newLog = {
            id: Date.now(),
            meal: mealName,
            amount: amountConsumed,
            calories: nutritionData.calories,
            protein: nutritionData.protein_g,
            fat: nutritionData.fat_total_g,
            carbs: nutritionData.carbohydrates_total_g,
            date: new Date().toLocaleDateString() // Add date for tracking
        };

        setMealLogs([...mealLogs, newLog]);
        setMealName('');
        setAmountConsumed(0);
    };

    const increaseAmount = () => {
        setAmountConsumed(prevAmount => prevAmount + 50);
    };

    // Aggregate totals for fats, carbs, and proteins for the pie chart
    const totalProtein = mealLogs.reduce((total, log) => total + log.protein, 0);
    const totalFat = mealLogs.reduce((total, log) => total + log.fat, 0);
    const totalCarbs = mealLogs.reduce((total, log) => total + log.carbs, 0);

    // Data for the pie chart (only fats, carbs, and proteins)
    const pieData = {
        labels: ['Protein (g)', 'Fat (g)', 'Carbohydrates (g)'],
        datasets: [
            {
                data: [totalProtein, totalFat, totalCarbs],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
            }
        ]
    };

    return (
        <>
            <MyNavbar />
            <div className="meal-log-container">
                <h2>Add Meal Log</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="mealName">Meal Name:</label>
                        <input
                            type="text"
                            id="mealName"
                            value={mealName}
                            onChange={(e) => setMealName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="amountConsumed">Amount Consumed (g):</label>
                        <input
                            type="number"
                            id="amountConsumed"
                            value={amountConsumed}
                            onChange={(e) => setAmountConsumed(Number(e.target.value))}
                            min="0" 
                            required
                        />
                        <button type="button" onClick={increaseAmount}>Increase by 50g</button>
                    </div>
                    <button type="submit">Add Meal</button>
                </form>

                <h3>Meal Logs</h3>
                <ul>
                    {mealLogs.map((log) => (
                        <li key={log.id}>
                            {log.meal}: {log.amount} g consumed - {log.calories} kcal, {log.protein} g protein, {log.fat} g fat, {log.carbs} g carbs
                        </li>
                    ))}
                </ul>

                <h3>Nutrient Breakdown (Proteins, Fats, Carbs)</h3>
                <Pie data={pieData} />
            </div>
        </>
    );
};

export default MealLog;
