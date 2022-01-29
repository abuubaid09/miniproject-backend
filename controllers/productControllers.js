const Product = require('../models/productModel');
const Merchant = require('../models/merchantModel');
// @desc    Mengambil seluruh data product
// @route   GET /product
// @access  Public
exports.getAllProduct = async (req, res, next)=>{
    try{
        const product = await Product.findAll({
            where: {
                merchantId: req.params.id
            }
        });
        res.status(200).json({
            success: true,
            message: "Data product berhasil diambil",
            data: product,
        })
    }catch (error){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}

// @desc    Menambahkan data product
// @route   POST /product
// @access  Public
exports.createProduct = async (req, res, next)=>{
    try{
        const product = await Product.create({
            productId: req.body.productId,
            productName: req.body.productName,
            price: req.body.price,
            quantity: req.body.quantity,
            merchantId: req.params.id
        });

        console.log(req.params.id);
        res.status(200).json({
            success: true,
            message: "Data product berhasil ditambahkan",
            data: product,
        });
    }catch (error){
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
    
}


// @desc    Edit data product
// @route   PUT /product
// @access  Public
exports.updateProduct = async (req, res, next)=>{
    try{
        const product = await Product.findByPk(req.params.productId,{
            where:{
                merchantId: req.params.id
            }
        });
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Data Product tidak ditemukan"
            });
        }
        await product.update(req.body);
        res.status(200).json({
            success: true,
            message: `Data product berhasil diperbarui`,
            data: product
        })
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

// @desc    Delete data product
// @route   DELETE /product
// @access  Public
exports.deleteProduct = async (req, res, next)=>{
    try{
        const product = await Product.findByPk(req.params.productId,{
            where:{
                merchantId: req.params.id
            }
        });
        
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Data product tidak ditemukan"
            })
        }
        await product.destroy();
        res.status(200).json({
            success: true,
            message: `Data product berhasil dihapus `,
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}