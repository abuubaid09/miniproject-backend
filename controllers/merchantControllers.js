const Merchant = require('../models/merchantModel');
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

// @desc    Menambahkan data merchant
// @route   POST /merchant
// @access  Public
exports.createMerchant = async (req, res, next)=>{
    try{
        const merchant = await Merchant.create(req.body);

        res.status(200).json({
            success: true,
            message: "Data merchant berhasil ditambahkan",
            data: merchant,
        });
    }catch (error){
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
    
}


// @desc    Melihat data satu merchant
// @route   PUT /merchant
// @access  Public
exports.getMerchant = async (req, res, next)=>{
    try{
        const merchant = await Merchant.findByPk(req.params.id);
        if(!merchant){
            return res.status(404).json({
                success: false,
                message: "Data merchant tidak ditemukan"
            });
        }
        res.status(200).json({
            success: true,
            message: `Data merchant berhasil diambil`,
            data: merchant
        })
    }catch (error){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}

// @desc    Edit data merchant
// @route   PUT /merchant
// @access  Public
exports.updateMerchant = async (req, res, next)=>{
    try{
        const merchant = await Merchant.findByPk(req.params.id);
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