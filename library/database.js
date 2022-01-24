const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('product_merchant', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    timezone: '+07:00'
});

module.exports = sequelize;




// const mysql = require('mysql');
 
// const connection = mysql.createConnection({
//    host:        'localhost',
//    user:        'root',
//    password:    '',
//    database:    'product_merchant'
//  });


//  module.exports = connection; 