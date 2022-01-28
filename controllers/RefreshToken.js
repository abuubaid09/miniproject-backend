const Merchant = require("../models/merchantModel");
const jwt = require("jsonwebtoken");

exports.refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const merchant = await Merchant.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!merchant[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const merchantId = merchant[0].id;
            const merchantName = merchant[0].merchantName;
            const accessToken = jwt.sign({merchantId, merchantName}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}