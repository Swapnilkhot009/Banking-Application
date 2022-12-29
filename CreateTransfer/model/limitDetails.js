const mongoose=require('mongoose');
const limitDetailsSchema=new mongoose.Schema({
    accountType:{
        type:String,
        required:true
     },
    dailyLimit:{
        type:Number,
        required:true
    },
    monthlyLimit:{
        type:Number,
        required:true
    }
})
const limitModel=new mongoose.model('LIMIT_DETAILS',limitDetailsSchema);
module.exports=limitModel;