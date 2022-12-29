const customerDetails=require('../model/customerDetails')
exports.getCustomerDetails  =async (req,res)=>{
    try{
        const customer = await customerDetails.findOne({ customerID: req.body.customerID }, { _id: 0, __v: 0 });
        return res.status(201).json(customer);

    }
    catch(e){
        return res.status(401).json("No customer found");
        console.log(e);
       
    }
}

exports.newCustomer  =async (req,res)=>{
    try{
        const newCustomer=await customerDetails.create(req.body);
        return res.status(201).json(newCustomer);
    }catch(err)
    {
            return res.status(401).json("Customer already exists");
    }
    
}