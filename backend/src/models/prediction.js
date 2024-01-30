module.exports = (sequelize, DataTypes) => {
    return sequelize.define('prediction', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        symbol_id: DataTypes.INTEGER,
        author: DataTypes.STRING,
        full_text: DataTypes.TEXT,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    });
};
