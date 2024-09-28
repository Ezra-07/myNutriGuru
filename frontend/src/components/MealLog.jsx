import React, { useState } from 'react';
import './MealLog.css'; // Ensure to create this CSS file for styles

const MealLog = () => {
    const [mealName, setMealName] = useState('');
    const [amountConsumed, setAmountConsumed] = useState(0);
    const [mealLogs, setMealLogs] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!mealName || amountConsumed <= 0) {
            alert("Please enter a valid meal and a positive amount.");
            return;
        }
        const newLog = {
            id: Date.now(),
            meal: mealName,
            amount: amountConsumed,
        };
        setMealLogs([...mealLogs, newLog]);
        setMealName('');
        setAmountConsumed(0);
    };

    const increaseAmount = () => {
        setAmountConsumed(prevAmount => prevAmount + 50);
    };

    return (
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
                        {log.meal}: {log.amount} g consumed
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealLog;
