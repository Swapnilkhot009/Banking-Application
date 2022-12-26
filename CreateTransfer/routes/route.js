const express =require('express')
const bodyparser=require('body-parser')
const TransactionSer  = require("../controller/transactionService")
const AccountSer=require("../controller/accountDetailsService")
const BankSer=require("../controller/bankDetailsService")
const route = express.Router();


route.post("/getCustomerDetails",TransactionSer.getCustomerDetails);
route.post("/register",TransactionSer.newCustomer);
route.post("/create-transfer",TransactionSer.newTransaction);
route.post("/account-details",AccountSer.getAccountDetails);
route.get("/bank-details",BankSer.getBankDetails);
route.get("/bank-detailsByBankcode",BankSer.getBankDetailsByBankCode);
route.post("/add-bank",BankSer.newBank);
route.put("/update", AccountSer.updateAccountDetails)
module.exports = route
