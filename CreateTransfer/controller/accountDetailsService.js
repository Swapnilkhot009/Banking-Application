const accountModel=require("../model/accountDetails")
exports.getAccountDetails=async(req,res)=>{
    try{
        const acc_details=await accountModel.find({customerID: req.body.customerID}, { _id: 0, __v: 0 });
        if(acc_details.length>0){
            res.status(200).json(acc_details
            )
        }else{
            res.status(400).json({
                    message: 'No data available ',
            });
        }
    }catch(err){
        res.status(404).json({
            message:err,
        });

    }
};