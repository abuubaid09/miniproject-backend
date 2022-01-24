const express = require('express');
require('dotenv').config();
const sequelize = require('./library/database.js');

require('./models/merchantModel');
require('./models/productModel');

const merchantRoutes = require('./routes/merchantRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.use('/merchant',merchantRoutes);
app.use('/product',productRoutes);

const PORT = process.env.PORT || 5000;

sequelize.authenticate().then(()=>{
    sequelize.sync().then(()=>{
        console.log('Database berhasil disambungkan');
        app.listen(PORT, console.log(`Server running on port ${PORT}`));
    })
}).catch(()=>console.log("Database Gagal disambungkan"));

