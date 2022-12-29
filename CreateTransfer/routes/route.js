const express =require('express')
const bodyparser=require('body-parser')
const TransactionSer  = require("../controller/transactionService")
const CustomerSer=require("../controller/customerService")
const AccountSer=require("../controller/accountDetailsService")
const BankSer=require("../controller/bankDetailsService")
const LimitService = require("../controller/LimitService")
const route = express.Router();


route.post("/getCustomerDetails",CustomerSer.getCustomerDetails);
route.post("/register",CustomerSer.newCustomer);
route.post("/create-transfer",TransactionSer.newTransaction);
route.post("/account-details",AccountSer.getAccountDetails);
route.get("/bank-details",BankSer.getBankDetails);
route.post("/add-bank",BankSer.newBank);
route.get("/transfer-limit/:accountType",LimitService.getLimitDetails);
route.put("/update", AccountSer.updateAccountDetails)
module.exports = route
