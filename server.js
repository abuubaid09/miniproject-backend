const express = require('express');
require('dotenv').config();
const sequelize = require('./library/database.js');
// const connection = require('./library/database.js');
require('./models/merchantModel');
const merchantRoutes = require('./routes/merchantRoutes');
const app = express();

app.use(express.json());

app.use('/merchant',merchantRoutes);

const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log(`Server running on port ${PORT}`));

// connection.connect(function(error){
//     if(!!error){
//       console.log("Koneksi Database gagal");
//     }else{
//       console.log('Koneksi Database Berhasil!');
//     }
//   })

sequelize.authenticate().then(()=>{
    sequelize.sync().then(()=>{
        console.log('Database berhasil disambungkan');
        app.listen(PORT, console.log(`Server running on port ${PORT}`));
    })
}).catch(()=>console.log("Database Gagal disambungkan"));

