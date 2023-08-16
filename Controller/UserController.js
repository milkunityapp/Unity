var form=require("../Model/RegisterForm");
var customer_data=require("../Model/Final_Bill_Data");
var Milk_Data_Require=require("../Model/Milk_Data");
var product_Add_Data=require("../Model/Product_Add");
var Admin_form=require("../Model/Admin_Registration");
const storage = require('node-persist');


var nodemailer = require('nodemailer');
 
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {   
    user: 'milkunityapp@gmail.com',
    pass: 'odqyfvqshxcufjvj'
  }
});

const Registration_data=async(req,res)=>{

    var d=await form.find({'Mobile_Number':req.body.Mobile_Number});
    var d1=await form.find({'email':req.body.email});

    if(d.length==0)
    {
        if(d1.length==0)
        {
            var otp = ("" + Math.random()).substring(2, 8)
            req.body.Otp=otp;
            var a = await form.create(req.body);
            var mailOptions = {
                from: 'milkunityapp@gmail.com',
                to: req.body.email, 
                subject: 'Sending Email using Node.js',
                text: "Your Otp is "+otp
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                    res.status(200).json(
                        a
                   )
                }
              });
            
        }
    }
    else
    {
        if(d.length!=0){
        res.status(200).json({
           status:"Your Number is already register"
        })}
        if(d1.length!=0){
            res.status(200).json({
               status:"Your Email is already register"
            })}
    }
};
const Otp_Post=async(req,res)=>{
            var otp = ("" + Math.random()).substring(2, 8)
            var mailOptions = {
                from: 'savanim469@gmail.com',
                to: req.body.Email, 
                subject: 'Sending Email using Node.js',
                text: otp
              };
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                    res.status(200).json(
                         Otp_get=async(req,res)=>{
                            res.status(200).json(
                                otp
                            )
                        }
                   )
                }
              });
};


const Admin_Registration_data=async(req,res)=>{
    var d=await Admin_form.find({'Mobile_Number':req.body.Mobile_Number});
    var d1=await Admin_form.find({'email':req.body.email});
    if(d.length==0)
    {
        if(d1.length==0)
        {
            var statuss="true";
            req.body.Admin_Status=statuss;
            var a = await Admin_form.create(req.body);
            res.status(200).json(
                a
             )
        }
        else
        {
                res.status(200).json({
                   status:"Your Email is already register"
                })
        }
    }
    else
    {
        if(d.length!=0){
        res.status(200).json({
           status:"Your Number is already register"
        })}
       
    }
};
const Registration_data_Name=async(req,res)=>{
    
    var data= await form.find();
    for (let index = 0; index < data.length; index++) 
    {
        if(data[index].First_Name==req.params.First_Name)
        {
            console.log("ok")
            var data1=data[index];
        }
    }
    console.log(data1)
    res.status(200).json(
        data1
    )
};
const Registration_data_Number=async(req,res)=>{
    
    var data= await form.find();
    for (let index = 0; index < data.length; index++) 
    {
        if(data[index].Mobile_Number==req.params.Mobile_Number)
        {
            console.log("ok")
            var data1=data[index];
        }
    }
    console.log(data1)
    res.status(200).json(
        data1
    )
};


const Registration_data_Update=async(req,res)=>{
    var id = req.params.id;
    var data= await form.findByIdAndUpdate(id,req.body);

    res.status(200).json(
        data
    )
};

const Login_Data=async(req,res)=>
{
    await storage.init( /* options ... */ );
    var id =  await storage.getItem('user_id');
    req.body.user_id=id;
    
    var data = await form.find({"Mobile_Number":req.body.Mobile_Number});


   if(data.length!=0)
   {
        if(data[0].password==req.body.password)
        {
            await storage.init( /* options ... */ );
            await storage.setItem('user_id',data[0].id);

            res.status(200).json(
                data
            )
        }
        else
        {
            res.status(200).json(
                "check your email and password"
            )
        }
   }
   else
   {
        res.status(200).json(
            "check your email and password"
        )
   }
};

const customer_Sell_Data=async(req,res)=>{

    await storage.init( /* options ... */ );
    var id =  await storage.getItem('user_id');
    req.body.user_id=id;

    const currentDate = new Date();
    req.body.date=currentDate.getDate();
    req.body.Month=currentDate.getMonth() + 1;
    req.body.year=currentDate.getFullYear();

    const dayOfWeek = currentDate.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    req.body.day= days[dayOfWeek];

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    const twelveHourFormat = hours % 12 || 12;

    const currentTime = `${twelveHourFormat}:${minutes}: ${amOrPm}`;
    req.body.Sell_Time=currentTime;
    var data = await form.find();
    for (let index = 0; index < data.length; index++) 
    {
        if(data[index].user_id==req.params.user_id)
        {
            req.body.First_Name=data[index].First_Name;
        }
    }

    var a=await customer_data.create(req.body);
    res.status(200).json(
        a
    )
};
const customer_Sell_Data_find=async(req,res)=>{
    
    var data= await customer_data.find();
    for (let index = 0; index < data.length; index++) 
    {
        if(data[index].user_id==req.params.user_id)
        {
            var data1=data1+data[index];
        }
    }

    res.status(200).json(
        data1
    )
};
const customer_Sell_Data_find_All=async(req,res)=>{
    
    var data= await customer_data.find();
    res.status(200).json(
        data
    )
};
const Milk_Data=async(req,res)=>{

    await storage.init( /* options ... */ );
    var id =  await storage.getItem('user_id');
    req.body.user_id=id;

    const currentDate = new Date();
    req.body.date=currentDate.getDate();
    req.body.Month=currentDate.getMonth() + 1;
    req.body.year=currentDate.getFullYear();

    var a=await Milk_Data_Require.create(req.body);
    res.status(200).json(
        a
    )
};

const Milk_Data_find=async(req,res)=>{

    await storage.init( /* options ... */ );
    var id =  await storage.getItem('user_id');

    var data= await Milk_Data_Require.find({"user_id":id});
   

    res.status(200).json(
        data
    )
};

const _Product_data_= async(req,res)=>
{

    var obj = {
        "product_name":req.body.product_name,
        "product_price":req.body.product_price,
        "product_image":req.file.originalname
       }
    var a=await product_Add_Data.create(obj);
    res.status(200).json(
        a
    )
};

const _Product_data_find=async(req,res)=>{
    
    var data= await product_Add_Data.find();
    res.status(200).json(
        data
    )
};
module.exports={Registration_data,Login_Data,customer_Sell_Data,Registration_data_Name,Milk_Data,
    Registration_data_Update,_Product_data_,Registration_data_Number,customer_Sell_Data_find,Milk_Data_find,_Product_data_find,
    Admin_Registration_data,customer_Sell_Data_find_All}