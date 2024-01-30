require('dotenv').config();
const db = require('./models');

async function initializeDatabase() {
    try {
        await db.sequelize.sync({ force: true });
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Unable to create database and tables:', error);
    }
}

initializeDatabase();
