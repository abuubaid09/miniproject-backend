const bcrypt = require('bcrypt');
const{DataTypes} = require('sequelize')

const sequelize = require('../library/database');

const Merchant = sequelize.define('Merchant', {
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    merchantName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    join_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    phone_number:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true
});

module.exports = Merchant;