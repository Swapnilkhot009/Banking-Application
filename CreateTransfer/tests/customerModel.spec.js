const chai=require('chai');
const expect=chai.expect;
const mongoose=require('mongoose');
const ValidationError=mongoose.Error.ValidationError;

var Customer=require('../model/customerDetails');

describe('Testing Customer Model',()=>{
    var sampleCustomer;
    beforeEach(()=>{
        sampleCustomer={
                customerID: 1234567801,
                customerName: "Vennela",
                customerAddress: "Vijayawada",
                ssn: 123456789012,
                customerPhoneNumber: 9515473545,
                customerEmailId: "vennela@gmail.com",
                bankCode: "Atlantis01",
                bankName: "Atlantis",
                okToMail: false,
                okToCall: false,
                okToText: false
        };
    });
    
    it('It should throw an error due to missing fields',(done)=>{
        let cust=new Customer();
        cust.validate((err)=>{
            expect(err.errors.customerID).to.exist;
            expect(err.errors.customerName).to.exist;
            expect(err.errors.customerAddress).to.exist;
            expect(err.errors.ssn).to.exist;
            expect(err.errors.customerPhoneNumber).to.exist;
            expect(err.errors.customerEmailId).to.exist;
            expect(err.errors.bankCode).to.exist;
            expect(err.errors.bankName).to.exist;
            done();
        });
    });

    it('It should create the item successfully with correct parameters',(done)=>{
        let cust=new Customer({
            ...sampleCustomer
        });

        cust.validate((err)=>{
            if (err) {
                const unexpectedFailureError = new Error('⚠️ Unexpected failure!');
                done(unexpectedFailureError);
              } else {
                done();
              }
        })
    })
})