const bcrypt = require('bcrypt');
const{DataTypes} = require('sequelize')

const sequelize = require('../library/database');
const Merchant = require('./merchantModel');

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
// Merchant.hasMany(Product, {
//     foreignKey: 'merchantId',
//   });
 
Merchant.hasMany(Product,{foreignKey: 'merchantId'});
// Product.belongsTo(Merchant);

module.exports = Product;