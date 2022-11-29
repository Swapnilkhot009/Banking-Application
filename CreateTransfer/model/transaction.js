const mongoose = require("mongoose");
const validator = require("validator");

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    customerID: {
        type: Number,
        required: true,
        validate: {
            validator: function (val) {
                return val.toString().length === 10
            },
            message: val => `${val.value} has to be 10 digits`
        }
    },
    transactionDate: {
        type: Date,
        default: Date.now()
    },
    transferType: {
        type: String,
        enum:["INTERNAL","EXTERNAL"],
    },
    frequency: {
        type: String,
        required: true,
    },
    creditorAccountDetails: {
            accountNo: {
                type: Number,
                required: true,
                
                validate: {
                    validator: function (val) {
                        return val.toString().length === 8
                    },
                    message: val => `${val.value} has to be 10 digits`
                }
                
            },
            accountType: {
                type: String,
                required: true,
                // pattern :"SAVINGS" || "CURRENT"|| "CURRENT",
                // description: "Must be either SAVINGS, CURRENT or CHECKING"
                enum:["SAVINGS","CURRENT","CHECKING"],
            },
            beneficiaryType: {
                type: String,
                required: true,
                enum:["PERSONEL","BUSINESS"],
                
            },
            beneficiaryDetails: { 
                    name: {
                        type: String,
                        required: true,
                    },
                    address: {
                        type: String,
                        required: true,
                    },
                    phone: {
                        type: Number,
                        required: true,
                        validate: {
                            validator: function (val) {
                                return val.toString().length === 10
                            },
                            message: val => `${val.value} has to be 10 digits`
                        }
                    },
                    email: {
                        type: String,
                        required: true,
                    },
                    beneficiaryBankInformation: {
                        bankCode:{
                            type:String,
                            maxLength:10,
                            required: true,
                        },
                        bankName:{
                            type:String,
                            maxLength:70,
                            required:true,
                        }
                    }
            },

    },
    debitorAccountDetails: {
            accountNo: {
                type: Number,
                required: true,
                validate: {
                    validator: function (val) {
                        return val.toString().length === 8
                    },
                    message: val => `${val.value} has to be 10 digits`
                }
            },
            accountType: {
                type: String,
                required: true,
                enum:["SAVINGS","CURRENT","CHECKING"],
            },
            accountName: {
                type: String,
                required: true,
            },
            debitorBankInformation: {
                bankCode:{
                    type:String,
                    maxLength:10,
                    required:true,
                },
                bankName:{
                    type:String,
                    maxLength:70,
                    required:true,
                }
            }
        },
        transactionReferenceNumber:{
            type:Number,
        
            validate: {
                validator: function (val) {
                    return val.toString().length === 16    
                },
                message: val => `${val.value} has to be 16 digits`
            }
        },
});

//User Model
const Transaction = new mongoose.model('transactions', transactionSchema)
module.exports = Transaction;