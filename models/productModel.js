const bcrypt = require('bcrypt');
const{DataTypes} = require('sequelize')

const sequelize = require('../library/database');

const Product = sequelize.define('Product', {
    productId:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    productName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Product;