module.exports = (sequelize, DataTypes) => {
    return sequelize.define('symbol', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    });
};
