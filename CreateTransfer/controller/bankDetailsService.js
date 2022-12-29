const bankModel=require('../model/bankDetails')

exports.newBank=async(req,res)=>{
    const bank_details=await bankModel.create(req.body);
    return res.status(200).json(bank_details);
};

exports.getBankDetails=async(req,res)=>{
    const b_details=await bankModel.find();
   return  res.status(200).json(b_details);
}