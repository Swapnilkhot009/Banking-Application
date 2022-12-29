const mongoose = require("mongoose");
const accountDetailsSchema=new mongoose.Schema({

    customerID:{
        type:Number,
        required:true,
        unique:true
    },
    accountNumber:{
        type:Number,
        required:true
    },
    accountType:{
        type:String,
        required:true

    },
    acconutName:{
        type:String,
        required:true
    },
    accountBalance:{
        type:Number,
        required:true
    }

})

const accountModel=new mongoose.model('ACCOUNT_DETAILS', accountDetailsSchema)

module.exports=accountModel;