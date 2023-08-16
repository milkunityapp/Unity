var express = require('express');
var router = express.Router();
const mongoose  = require("mongoose");
const multer = require('multer');

const {Registration_data,Login_Data,customer_Sell_Data,Registration_data_Name,Milk_Data,
    Registration_data_Update,_Product_data_,Registration_data_Number,customer_Sell_Data_find,
    Milk_Data_find,_Product_data_find,Admin_Registration_data,customer_Sell_Data_find_All}=require("../Controller/UserController");

    
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) 
  }
})
var upload = multer({ storage: storage })

router.post('/otp/:email',Registration_data);
router.post('/Registration',Registration_data);
router.post('/Admin-Registration',Admin_Registration_data);
router.get('/Registration_data_Name/:First_Name',Registration_data_Name);
router.get('/Registration_data_Number/:Mobile_Number',Registration_data_Number);
router.post('/Registration/Update/:id',Registration_data_Update);
router.post('/Login',Login_Data);
router.post('/customer-Selling',customer_Sell_Data);
router.get('/customer-Selling/:user_id',customer_Sell_Data_find);
router.get('/customer-Selling/',customer_Sell_Data_find_All);
router.post('/Milk_Data',Milk_Data);
router.get('/Milk_Data',Milk_Data_find);
router.post('/Product_Add',upload.single('product_image'),_Product_data_);
router.get('/Product_Add',_Product_data_find);
module.exports = router;
