const chai=require('chai');
const expect=chai.expect;
const mongoose=require('mongoose');
const ValidationError=mongoose.Error.ValidationError;
var Account=require('../model/accountDetails')
describe('Testing Account Model',()=>{
    var sampleAcc;
    beforeEach(()=>{
        sampleAcc={
            customerID:1234567890,
            accountNumber: 67676767,
            accountType: "SAVINGS",
            acconutName: "BUSINESS",
            accountBalance: 100000
        };
    });

    it('It should throw an error due to missing fields',(done)=>{
        let acc=new Account();
        acc.validate((err)=>{
            expect(err.errors.customerID).to.exist;
            expect(err.errors.accountNumber).to.exist;
            expect(err.errors.accountType).to.exist;
            expect(err.errors.acconutName).to.exist;
            expect(err.errors.accountBalance).to.exist;
            done();
        });
    });

    it('It should create the item successfully with correct parameters',(done)=>{
        let acc=new Account({
            ...sampleAcc
        });
        acc.validate((err)=>{
            if(err){
                const unexpectedFailureError=new Error('Unexpected Failure');
                done(unexpectedFailureError);
            }else{
                done();
            }
        });

    });
});