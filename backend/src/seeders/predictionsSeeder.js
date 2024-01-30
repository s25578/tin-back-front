require('dotenv').config();
const db = require('../models');

const predictionsData = [
    { symbol_id: 1, author: 'Alice', full_text: 'Bitcoin to hit $100k by 2025' },
    { symbol_id: 2, author: 'Bob', full_text: 'Ethereum will surpass Bitcoin' },
    { symbol_id: 3, author: 'Charlie', full_text: 'Ripple will dominate banking sector' },
    { symbol_id: 4, author: 'Dave', full_text: 'Litecoin will double in value' },
    { symbol_id: 5, author: 'Eve', full_text: 'Cardano will revolutionize smart contracts' }
];

async function seedPredictions() {
    try {
        for (const prediction of predictionsData) {
            await db.predictions.create(prediction);
        }
        console.log('Predictions seeded successfully.');
    } catch (error) {
        console.error('Error seeding predictions:', error);
    }
}

seedPredictions();
