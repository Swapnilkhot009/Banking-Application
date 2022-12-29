const accountModel=require("../model/accountDetails")
exports.getAccountDetails=async (req,res)=>{
    
    try{
        const acc_details = await accountModel.find({ customerID: req.body.customerID }, { _id: 0, __v: 0 });
        return res.status(200).json(acc_details);
    
    }catch(e){
        console.log(e);
        return res.status(401).json({
            message: e
        });
    }

    
};
exports.updateAccountDetails = async (req, res) => {
    try {
        const acc_details = await accountModel.find({ customerID: req.body.customerID, accountNumber: req.body.accountNumber }, { _id: 0, __v: 0 });
        var myquery = { customerID: req.body.customerID, accountNumber: req.body.accountNumber };
        var newvalues = { $set: { accountBalance:acc_details.accountBalance-req.amount } };
        await accountModel.updateOne.updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
        });
        // if (acc_details.length > 0) {
        //     acc_details.accountBalance = acc_details.accountBalance - req.amount
        //     accountModel.
        // }
        // var myquery = { address: "Valley 345" };
        // var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
        // dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
        //     if (err) throw err;
        //     console.log("1 document updated");
        //     db.close();
        // });
    } catch (err) {
        res.status(404).json({
            message: err,
        });

    }
}