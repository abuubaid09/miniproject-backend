const express = require('express');
const router = express.Router();
const {
    getAllMerchants, 
    getMerchant, 
    createMerchant, 
    updateMerchant, 
    deleteMerchant
} = require('../controllers/merchantControllers');

// router.route('/').get(getAllMerchants).post(createMerchant);
// router.route('/:id').get(getMerchant).put(updateMerchant).delete(deleteMerchant);

router.get('/', getAllMerchants);
router.post('/', createMerchant);
router.get('/:id', getMerchant);
router.put('/:id', updateMerchant)
router.delete('/:id', deleteMerchant);

module.exports = router;