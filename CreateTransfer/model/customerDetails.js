const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/transactionDB").then(()=>   
console.log("Database Connected")
);
const customerDetailsSchema = new mongoose.Schema({
    customerID: {
        type: Number,
        required: true,
        unique: true
    },
    customerName: {
        type: String,
        required:true
    },
    customerAddress: {
        type: String,
        required: true
    },
    ssn: {
        type: Number,
        required: true
    },
    customerPhoneNumber: {
        type: Number,
        required: true
    },
    customerEmailId: {
        type: String,
        required: true
    },
    bankCode: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    okToMail: {
        type: Boolean,
        required: true,
        default: false
    },
    okToCall: {
        type: Boolean,
        required: true,
        default: false
    },
    okToText: {
        type: Boolean,
        required: true,
        default: false
    }
});

//User Model
const customerDetails = new mongoose.model('customer_details', customerDetailsSchema)

module.exports = customerDetails;