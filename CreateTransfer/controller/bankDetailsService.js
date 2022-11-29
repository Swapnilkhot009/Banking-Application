const bankModel=require('../model/bankDetails')

exports.newBank=async(req,res)=>{
    const bank_details=await bankModel.create(req.body);
    res.status(200).json(bank_details);
};

exports.getBankDetails=async(req,res)=>{
    let bankCodeSet = []
    const b_details=await bankModel.find();
    // b_details.forEach(element => {
    //     bankCodeSet.push(element.bankCode)
    // });
    res.status(200).send(b_details)
    //res.status(200).json(b_details.bankCode);
}

exports.getBankDetailsByBankCode=async(req,res)=>{
    const b_details=await bankModel.findOne({"bankCode":req.body.bankCode});
    if(b_details==null){res.status(400).json({"error":"Details for goven code not available"})}
    else{res.status(200).json(b_details);}
}