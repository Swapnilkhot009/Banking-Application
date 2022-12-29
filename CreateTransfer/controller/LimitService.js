const limitDetails = require("../model/limitDetails");
const transactions = require("../model/transaction");
const dateTime = require('date-and-time')

exports.getLimitDetails  =async (req,res)=>{
    try{
        const limits = await limitDetails.findOne({accountType: req.params.accountType.toUpperCase()});
        const transactionDailyLimit = await transactions.aggregate([{ 
            $match: {
                customerID: Number(req.headers.customerid), 
                transactionDate: new Date(dateTime.format(new Date(),'YYYY-MM-DD'))
            } },
            {$group: {_id: '$customerID', sum: {$sum: "$amount"} }}]);
        const transactionMonthlyLimit = await transactions.aggregate([{ 
            $match: {
                customerID: Number(req.headers.customerid), 
                $and:[{
                    transactionDate: {
                        $gte: new Date(dateTime.format(new Date(new Date().getFullYear(), new Date().getMonth(),1),'YYYY-MM-DD')),
                        $lte: new Date(dateTime.format(new Date(new Date().getFullYear(), new Date().getMonth()+1,0),'YYYY-MM-DD'))
                    }
                    }]}},
            {$group: {_id: '$customerID', sum: {$sum: "$amount"} }}]);
            let availableDailyLimit = transactionDailyLimit.length==0?limits.dailyLimit:limits.dailyLimit-transactionDailyLimit[0].sum ;
            let availableMonthlyLimit = transactionMonthlyLimit.length==0?limits.monthlyLimit:limits.monthlyLimit-transactionMonthlyLimit[0].sum
        res.status(200).json({
            dailyLimit: limits.dailyLimit,
            monthlyLimit: limits.monthlyLimit,
            availableDailyLimit: availableDailyLimit,
            availableMonthlyLimit: availableMonthlyLimit
        });
    }catch(e){
        console.log(e);
        res.status(401).json({
            message: e
        });
    }
}