const express = require('express');
const router = express.Router();
const {
    getAllProduct, 
    getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct
} = require('../controllers/productControllers');
const { verifyToken } = require("../middleware/VerifyToken.js");
const{refreshToken} = require("../controllers/RefreshToken.js");

// router.route('/').get(getAllMerchants).post(createMerchant);
// router.route('/:id').get(getMerchant).put(updateMerchant).delete(deleteMerchant);

router.get('/:id', verifyToken, getAllProduct);
router.post('/:id',verifyToken, createProduct);
// router.get('/:id', getProduct);
router.put('/:id/:productId',verifyToken, updateProduct)
router.delete('/:id/:productId',verifyToken, deleteProduct);
router.get('/token', refreshToken);

module.exports = router;