const mongoose  = require("mongoose");
const Sell_Data = new mongoose.Schema({
    
    date:{type:String},
    Month:{type:String},
    year:{type:String},
    day:{type:String},
    First_Name:{type:String},
    Sell_Time:{type:String},
    payment_method:{type:String},
    payment_Status:{type:String},
    user_id:{type:String}
});


const Sell_Data_Schema = mongoose.model('customer', Sell_Data);
module.exports=Sell_Data_Schema;