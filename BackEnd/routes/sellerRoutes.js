const express = require('express');
const router = express.Router();
const Product = require('../database/Product');
// const User = require("../database/User");
// const Order = require('../database/Order');
const {logIn,signUp} = require('../database/Auth')
const {protect,checkAdminRole}= require('../MiddleWares/MiddleWares')

router.get('/products', Product.getOneProduct);
router.put('/products/:productId', protect,Product.modifyProduct);
router.delete('/products/category/:category',protect,Product.removeProduct)
router.post('/products/add',protect,Product.addProduct)

//JWT token 

router.get('/:userid',User.getOneUser)
router.put('/:userid',User.updateUser)

router.post('/signup',signUp)
router.post('/login',logIn)
module.exports=router
