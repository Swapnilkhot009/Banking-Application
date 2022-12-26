const express = require('express')
const Transaction = require("../model/transaction")
const accountModel = require("../model/accountDetails")
const validator = require('../Utilities/Validator')
const propertiesReader = require('properties-reader')
const customerDetails = require("../model/customerDetails")
const properties = propertiesReader('Utilities/messages.properties')
const AccountSer = require("../controller/accountDetailsService")
const route = express.Router();
//const rp = require('request-promise');
exports.newTransaction = async (req, res) => {
    try {
        if (validator.required(req.body) != null) {
            res.status(400).json({
                status: "error",
                message: validator.required(req.body)
            })
        }
        else if (validator.validateFrequency(req.body.frequency) != null) {
            let errorCode = validator.validateFrequency(req.body.frequency);
            let message = properties.get("error." + errorCode) + " - Inavalid frequency type";
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            })
        }

        else if (validator.validateCustomer_ID(req.body.customerID) != null) {
            let errorCode = validator.validateCustomer_ID(req.body.customerID);
            let message = properties.get("error." + errorCode) + " - Customer Id should be of 10 digits";
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            });
        }
        else if (validator.validateDateFormat(req.body.transactionDate) != null) {
            let errorCode = validator.validateDateFormat(req.body.transactionDate);
            let message = "";
            if (errorCode === "CT001") {
                message = properties.get("error." + errorCode) + " - Date should be in format YYYY-MM-DD";
            }
            else {
                message = properties.get("error." + errorCode);
            }
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            });
        }
        else if (validator.validateTransferType(req.body.transferType) != null) {
            let errorCode = validator.validateTransferType(req.body.transferType);
            let message = properties.get("error." + errorCode) + " - Invalid Transfer Type"
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            })
        }
        else if (validator.validateAccountNo(req.body.creditorAccountDetails.accountNo) != null) {
            let errorCode = validator.validateAccountNo(req.body.creditorAccountDetails.accountNo);
            let message = properties.get("error." + errorCode) + " - Account No. should be of 8 digits";
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            })
        }
        else if (validator.validateAccountType(req.body.creditorAccountDetails.accountType) != null) {
            let errorCode = validator.validateAccountType(req.body.creditorAccountDetails.accountType);
            let message = properties.get("error." + errorCode) + " - Inavalid creditor account type";
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            })
        }
        else if (validator.validateBeneficiaryType(req.body.creditorAccountDetails.beneficiaryType) != null) {
            let errorCode = validator.validateBeneficiaryType(req.body.creditorAccountDetails.beneficiaryType);
            let message = properties.get("error." + errorCode) + " - Invalid beneficiary type"
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            })
        }
        else if (validator.validatePhone_ID(req.body.creditorAccountDetails.beneficiaryDetails.phone) != null) {
            let errorCode = validator.validatePhone_ID(req.body.creditorAccountDetails.beneficiaryDetails.phone);
            let message = properties.get("error." + errorCode) + " - Phone should be of 10 digits";
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            })
        }
        else if (validator.validateEmail(req.body.creditorAccountDetails.beneficiaryDetails.email) != null) {
            let errorCode = validator.validateEmail(req.body.creditorAccountDetails.beneficiaryDetails.email);
            let message = properties.get("error." + errorCode) + " - Invalid Email ID";
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            })

        }


        else if (validator.validateAccountNo(req.body.debitorAccountDetails.accountNo) != null) {
            let errorCode = validator.validateAccountNo(req.body.debitorAccountDetails.accountNo);
            let message = properties.get("error." + errorCode) + " - Account No. should be of 8 digits";
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            });
        }
        else if (validator.validateAccountType(req.body.debitorAccountDetails.accountType) != null) {
            let errorCode = validator.validateAccountType(req.body.debitorAccountDetails.accountType);
            let message = properties.get("error." + errorCode) + " - Invalid debitor Account type";
            res.status(400).json({
                status: "error",
                errorCode: errorCode,
                message: message
            })
        }
        else {
            var i = Math.random().toFixed(16).split('.')[1];
            req.body.transactionReferenceNumber = i;
            //await route.put("/update", AccountSer.updateAccountDetails)
            // await rp({
            //     method: 'PUT',
            //     uri: 'http://localhost:3000/update',
            //     body: {
            //         "customerID": req.body.customerID,
            //         "accountNumber":req.body.debitorAccountDetails.accountNo,
            //         "amount" : req.body.amount
            //     },
            //     json: true
            // })
            const newTransaction = await Transaction.create(req.body);
            if (newTransaction != null) {
                const acc_details = await accountModel.find({ customerID: req.body.customerID, accountNumber: req.body.debitorAccountDetails.accountNo }, { _id: 0, __v: 0 });
                var myquery = { customerID: req.body.customerID, accountNumber: req.body.debitorAccountDetails.accountNo };
                var newvalues = { $set: { accountBalance: acc_details[0].accountBalance - req.body.amount } };
                accountModel.updateOne(myquery, newvalues, function (err, res) {
                    if (err) throw err;
                });
            }
            res.status(201).send(i);
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({
            message: e
        });
    }
}

exports.getCustomerDetails = async (req, res) => {
    try {
        const customer = await customerDetails.findOne({ customerID: req.body.customerID }, { _id: 0, __v: 0 });
        if (customerDetails.length > 0) {
            res.status(200).send(customer);
        } else {
            res.status(200).send("No customer found");
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({
            message: e
        });
    }
}

exports.newCustomer = async (req, res) => {
    try {
        const newCustomer = await customerDetails.create(req.body);
        res.status(201).send(newCustomer);
    } catch (e) {
        console.log(e);
        res.status(401).json({
            message: e
        });
    }
}
