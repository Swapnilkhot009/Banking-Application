const validator = require('validator');
const dateTime = require('date-and-time')


exports.validateCustomer_ID = function (customerId) {
    const regexp = /^\d{10}$/;
    if(customerId.toString().match(regexp) ){
        return null;
    }
    return "CT001";
}


exports.validateFrequency = function (frequency) {
    if(frequency.toUpperCase() === 'ONETIME' || frequency.toUpperCase() === 'RECURRING' ){
        return null;
    }
    return "CT001";
}
exports.validateTransferType = function (transferType) {
    if(transferType.toUpperCase() === 'INTERNAL' || transferType.toUpperCase() === 'EXTERNAL'){
        return null;
    }
    return "CT001";
}

exports.validateAccountType = function (accountType) {
    if(accountType.toUpperCase() === 'SAVINGS' || accountType.toUpperCase() === 'CURRENT' 
    || accountType.toUpperCase() === 'CHECKING'){
        return null;
    }
    return "CT001";
}

exports.validateBeneficiaryType = function (beneficiaryType) {
    if(beneficiaryType.toUpperCase() === 'PERSONEL' || beneficiaryType.toUpperCase() === 'BUSINESS'){
        return null;
    }
    return "CT001";
}

exports.validatePhone_ID = function (phoneNo) {
    const regexp = /^\d{10}$/;
    if(phoneNo.toString().match(regexp)){
        return null;
    }
    return "CT001";
}





exports.validateAccountNo = function (accountNo) {
    const regexp = /^\d{8}$/;
    if(accountNo.toString().match(regexp)){
        return null;
    }
    return "CT001";
}

exports.validateEmail = function (email) {
    if(validator.isEmail(email)){
        return null;
    }
    return "CT001";
}

exports.validateDateFormat = function (date) {
    const regexp = /^\d{4}-\d{2}-\d{2}$/;
    if(!date.toString().match(regexp)){
        return "CT001";
    }
    let today = dateTime.format(new Date(),'YYYY-MM-DD');
    let userDate = dateTime.format(new Date(date),'YYYY-MM-DD');
    if(today.localeCompare(userDate) === 1){
        return "CT100";
    }
    else if(today.localeCompare(userDate) === -1){
        return "CT101"
    }
    return null;
}

exports.required = function (data) {``
    if(!data.customerID)
        return "Customer Id is required";
    else if(!data.amount)
        return "Amount is required";
    else if(!data.transferType)
        return "Transfer type is required";
    else if(!data.debitorAccountDetails.accountNo)
        return "Debitor account No. is required";
    else if(!data.debitorAccountDetails.accountType)
        return "Debitor account type is required";
    else if(!data.debitorAccountDetails.accountName)
        return "Debitor account name is required";
    else if(!data.creditorAccountDetails.accountNo)
        return "Creditor account No. is required";
    else if(!data.creditorAccountDetails.accountType)
        return "Creditor account type is required";
    else if(!data.creditorAccountDetails.beneficiaryType)
        return "Creditor beneficiary type is required";
    else if(!data.creditorAccountDetails.beneficiaryDetails.name)
        return "Benificiary Name required";
    else if(!data.creditorAccountDetails.beneficiaryDetails.address)
        return "Beneficiary address required";
    else if(!data.creditorAccountDetails.beneficiaryDetails.phone)
        return "Beneficiary phone no. required";
    else if(!data.creditorAccountDetails.beneficiaryDetails.email)
        return "Beneficiary email is required";
    return null;
}

