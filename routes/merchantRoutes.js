const { verifyToken } = require("../middleware/VerifyToken.js");
const{refreshToken} = require("../controllers/RefreshToken.js");
const express = require('express');

const router = express.Router();
const {
    getAllMerchants, 
    getMerchant, 
    register, 
    login,
    updateMerchant, 
    deleteMerchant
} = require('../controllers/merchantControllers');

// router.route('/').get(getAllMerchants).post(register);
// router.route('/:id').get(getMerchant).put(updateMerchant).delete(deleteMerchant);

router.post('/register', register);
router.post('/login', login);
router.put('/:id', updateMerchant)
router.delete('/:id', verifyToken,deleteMerchant);
router.get('/token', refreshToken);

module.exports = router;