const mongoose  = require("mongoose");
const product_Data = new mongoose.Schema({
    
    product_price:{type:Number}
});

const product_Add_ = mongoose.model('Product', product_Data);
module.exports=product_Add_;