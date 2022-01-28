const Merchant = require('../models/merchantModel');
const bcrypt = require("bcrypt");
// import req from "express/lib/request";
const jwt = require('jsonwebtoken');
// @desc    Mengambil seluruh data merchant
// @route   GET /merchant
// @access  Public
exports.getAllMerchants = async (req, res, next)=>{
    try{
        const merchant = await Merchant.findAll();
        res.status(200).json({
            success: true,
            message: "Data merchant berhasil diambil",
            data: merchant,
        })
    }catch (error){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}

// @desc    register merchant
// @route   POST /merchant
// @access  Public
exports.register = async (req, res, next)=>{
    const { merchantName, address, join_date, phone_number, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({message: "Password dan Confirm Password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try{
        // const merchant = await Merchant.create(req.body);
        await Merchant.create({
            password: hashPassword,
            merchantName: merchantName,
            address: address,
            join_date: join_date,
            phone_number: phone_number
        });
        res.status(200).json({
            success: true,
            message: "Register berhasil",
            // data: merchant,
        });
    }catch (error){
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
    
}

exports.login = async(req, res, next) => {
    try {
        const merchant = await Merchant.findAll({
            where:{
                merchantName: req.body.merchantName
            }
        });
        
        const match = await bcrypt.compare(req.body.password, merchant[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const merchantId = merchant[0].id;
        const merchantName = merchant[0].merchantName;
        const accessToken = jwt.sign({merchantId, merchantName}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '60s'
        });
        const refreshToken = jwt.sign({merchantId, merchantName}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Merchant.update({refresh_token: refreshToken},{
            where:{
                id: merchantId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Merchant Name tidak ditemukan"});
    }
}

// @desc    Edit data merchant
// @route   PUT /merchant
// @access  Public
exports.updateMerchant = async (req, res, next)=>{
    try{
        const merchant = await Merchant.findByPk(req.params.id);
        console.log(merchant);
        if(!merchant){
            return res.status(404).json({
                success: false,
                message: "Data Merchant tidak ditemukan"
            });
        }
        await merchant.update(req.body);
        res.status(200).json({
            success: true,
            message: `Data merchant berhasil diperbarui`,
            data: merchant
        })
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

// @desc    Delete data merchant
// @route   DELETE /merchant
// @access  Public
exports.deleteMerchant = async (req, res, next)=>{
    try{
        
        const merchant = await Merchant.findByPk(req.params.id);
        if(!merchant){
            return res.status(404).json({
                success: false,
                message: "Data merchant tidak ditemukan"
            })
        }
        await merchant.destroy();
        res.status(200).json({
            success: true,
            message: `Data merchant berhasil dihapus `,
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}