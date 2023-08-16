const mongoose  = require("mongoose");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Admin_Register = new mongoose.Schema({
    First_Name:{type:String},
    Middle_Name:{type:String},
    Last_Name:{type:String},
    Admin_Status:{type:String},
    
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [emailRegex, 'Invalid email format'],
    },
    countryCode:{
      type: String,
      required: true,
      validate: 
      {
        validator: function (v) 
        {
          return /^\+\d{1,2}$/.test(v);
        },
        message: props => `${props.value} is not a valid country code with '+' sign!`,
      }
    },
    Mobile_Number:{
        type: String,
        required: true,
        unique: true,
        validate: 
        {
          validator: function (value) 
          {
            return /^[0-9]{10}$/.test(value);
          },
          message: 'Mobile number must be a 10-digit number without spaces or special characters.'
        }},
    password:{type:String}
});


const Admin_Register_Schema = mongoose.model('Admin_Data', Admin_Register);
module.exports=Admin_Register_Schema;