const chai=require('chai');
const expect=chai.expect;
const mongoose=require('mongoose');
const ValidationError=mongoose.Error.ValidationError;
var Bank=require('../model/bankDetails')

describe('Testing Bank Model',()=>{
    var sampleBank;
    beforeEach(()=>{
        sampleBank={
            bankCode:'SBI001',
            bankName:'State Bank',
            bankAddress:'Vijayawada'
        };
    });

    it('It should throw an error due to missing fields',(done)=>{
        let bank=new Bank();
        bank.validate((err)=>{
            expect(err.errors.bankCode).to.exist;
            expect(err.errors.bankName).to.exist;
            expect(err.errors.bankAddress).to.exist;
            done();
        });
    });

    it('It should create the item successfully with correct parameters',(done)=>{
        let bank=new Bank({
            ...sampleBank
        });
        bank.validate((err)=>{
            if(err){
                const unexpectedFailureError=new Error('Unexpected Failure');
                done(unexpectedFailureError);
            }else{
                done();
            }
        });

    });
});