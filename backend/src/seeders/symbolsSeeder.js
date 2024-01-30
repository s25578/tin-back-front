require('dotenv').config();
const db = require('../models');

const symbolsData = [
    { code: 'BTC', name: 'Bitcoin', description: 'Digital Gold' },
    { code: 'ETH', name: 'Ethereum', description: 'Smart Contract Leader' },
    { code: 'XRP', name: 'Ripple', description: 'Banking Focused Cryptocurrency' },
    { code: 'LTC', name: 'Litecoin', description: 'Silver to Bitcoin’s Gold' },
    { code: 'ADA', name: 'Cardano', description: 'Peer-reviewed Blockchain' }
];

async function seedSymbols() {
    try {
        for (const symbol of symbolsData) {
            await db.symbols.create(symbol);
        }
        console.log('Symbols seeded successfully.');
    } catch (error) {
        console.error('Error seeding symbols:', error);
    }
}

seedSymbols();
