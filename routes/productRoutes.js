const express = require('express');
const router = express.Router();
const {
    getAllProduct, 
    getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct
} = require('../controllers/productControllers');

// router.route('/').get(getAllMerchants).post(createMerchant);
// router.route('/:id').get(getMerchant).put(updateMerchant).delete(deleteMerchant);

router.get('/', getAllProduct);
router.post('/', createProduct);
router.get('/:id', getProduct);
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct);

module.exports = router;