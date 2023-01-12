const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    database: 'userapp',
    username: 'root',
    password: '0000',
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firstName: {
        type: DataTypes.STRING(15),
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING(15),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
});

module.exports = User;
