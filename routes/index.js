var express = require('express');
var router = express.Router();
const mongoose  = require("mongoose");
const multer = require('multer');

const {
  Registration_data,
  Login_Data,
  customer_Sell_Data,
  Registration_data_Name,
  Milk_Data,
  Registration_data_Update,
  _Product_data_,
  Registration_data_Number,
  customer_Sell_Data_find,
  Milk_Data_find_Date,
  Milk_Data_find,
  _Product_data_find,
  Admin_Registration_data,
  customer_Sell_Data_find_All,
  Milk_data_Update,
  customer_Sell_find_Date,
  customer_Sell_find_Date_,
  Product_data_Update
}=require("../Controller/UserController");

    
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
router.post('/Registration/Update/:id',Registration_data_Update);
router.get('/Registration_data_Name/:First_Name',Registration_data_Name);
router.get('/Registration_data_Number/:Mobile_Number',Registration_data_Number);

router.post('/Admin-Registration',Admin_Registration_data);

router.post('/Login',Login_Data);

router.post('/customer-Selling/:user_id/:First_Name',customer_Sell_Data);
router.get('/customer-Selling/:id',customer_Sell_Data_find);
router.get('/customer-Selling/:Month/:Year',customer_Sell_Data_find_All);
router.get('/customer-Selling/:Month/:Year/:First_Name',customer_Sell_find_Date);
router.get('/customer-Selling_/:id/:Month/:Year',customer_Sell_find_Date_);

router.post('/Milk_Data/Update/:id',Milk_data_Update);
router.post('/Milk_Data/:id',Milk_Data);
router.get('/Milk_Data/:id',Milk_Data_find);
router.get('/Milk_Data/:id/:Month/:Year',Milk_Data_find_Date);

router.post('/Product_Add',_Product_data_);
router.get('/Product_Add',_Product_data_find);
router.post('/Product_Add/Update/:id',Product_data_Update);
module.exports = router;
