const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.symbols = require('./symbol')(sequelize, Sequelize);
db.predictions = require('./prediction')(sequelize, Sequelize);

db.symbols.hasMany(db.predictions, { foreignKey: 'symbol_id' });
db.predictions.belongsTo(db.symbols, { foreignKey: 'symbol_id' });

module.exports = db;
