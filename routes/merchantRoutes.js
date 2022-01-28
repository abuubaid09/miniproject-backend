const { verifyToken } = require("../middleware/VerifyToken.js");
const express = require('express');

const router = express.Router();
const {
    getAllMerchants, 
    getMerchant, 
    register, 
    updateMerchant, 
    deleteMerchant
} = require('../controllers/merchantControllers');

// router.route('/').get(getAllMerchants).post(register);
// router.route('/:id').get(getMerchant).put(updateMerchant).delete(deleteMerchant);

router.get('/', getAllMerchants);
router.post('/', register);
router.get('/:id', getMerchant);
router.put('/:id', updateMerchant)
router.delete('/:id', deleteMerchant);

module.exports = router;