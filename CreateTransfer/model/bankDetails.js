const mongoose=require('mongoose');
const bankDetailsSchema=new mongoose.Schema({
    bankCode:{
        type:String,
        required:true
     },
    bankName:{
        type:String,
        required:true
    },
    bankAddress:{
        type:String,
        required:true
    }
})
const bankModel=new mongoose.model('BANK_DETAILS',bankDetailsSchema);
module.exports=bankModel;