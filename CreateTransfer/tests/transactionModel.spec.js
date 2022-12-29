const chai=require('chai');
const expect=chai.expect;
const mongoose=require('../model/transaction');
//const ValidationError=mongoose.Error.ValidationError;

const Transaction=require('../model/transaction');

describe('Testing Transaction Model',()=>{
    let sampleTrans;

    beforeEach(()=>{
        sampleTrans={
            amount: 100,customerID: 1234567890,transactionDate:"2022-12-09" ,transferType:"EXTERNAL",frequency:"RECURRING",
            creditorAccountDetails:{accountNo: 12345678,accountType:"CURRENT",
            beneficiaryType:"PERSONEL",beneficiaryDetails: {name: "Raj K",address: "Baner Road Mumbai",phone: 9999999999,email: "Raj123@gmail.com",      
            beneficiaryBankInformation:{ bankCode: "IFSCC",bankName: "ICICI BANK OF INDIA"}}  
            }, debitorAccountDetails: {accountNo: 12345678,accountType: "CURRENT",accountName: "Max p",   
            debitorBankInformation:{bankCode: "SBIN0",bankName: "STATE BANK OF INDIA"}},transactionReferenceNumber:"1234567899876543"};
    });

    it('It should throw an error due to missing fields',(done)=>{

        let trans = new Transaction({...sampleTrans});
        trans.validate((err)=>{
            if(err){
                const unexpectedFailureError=new Error('Unexpected failure');
                done(unexpectedFailureError);
            }else{
                expect(trans.amount).to.exist; 
                expect(trans.customerID).to.exist;
                expect(trans.frequency).to.exist;
                expect(trans.creditorAccountDetails.accountNo).to.exist;
                expect(trans.creditorAccountDetails.accountType).to.exist;
                expect(trans.creditorAccountDetails.beneficiaryType).to.exist;
                expect(trans.creditorAccountDetails.beneficiaryDetails.name).to.exist;
                expect(trans.creditorAccountDetails.beneficiaryDetails.address).to.exist;
                expect(trans.creditorAccountDetails.beneficiaryDetails.phone).to.exist;
                expect(trans.creditorAccountDetails.beneficiaryDetails.email).to.exist;
                expect(trans.creditorAccountDetails.beneficiaryDetails.beneficiaryBankInformation.bankCode).to.exist;
                expect(trans.creditorAccountDetails.beneficiaryDetails.beneficiaryBankInformation.bankName).to.exist;
                expect(trans.debitorAccountDetails.accountNo).to.exist;
                expect(trans.debitorAccountDetails.accountType).to.exist;
                expect(trans.debitorAccountDetails.accountName).to.exist;
                expect(trans.debitorAccountDetails.debitorBankInformation.bankCode).to.exist;
                expect(trans.debitorAccountDetails.debitorBankInformation.bankName).to.exist;
                done();
            }
        })    
    });
    it('it should throw an error due to length validation', (done) => {
        let trans = new Transaction({...sampleTrans});
        trans.validate((err)=>{
            if(err){
                const unexpectedFailureError=new Error('Unexpected failure');
                done(unexpectedFailureError);
            }else{
                expect(trans.customerID.toString().length).to.equal(10);
                expect(trans.creditorAccountDetails.accountNo.toString().length).to.equal(8);
                expect(trans.debitorAccountDetails.accountNo.toString().length).to.equal(8);
                expect(trans.creditorAccountDetails.beneficiaryDetails.phone.toString().length).to.equal(10);
                done();
            }
        }) 
      });
      
      it('It should throw an error for enum validations', (done) => {
        let trans = new Transaction({
          ...sampleTrans
        });
    
        trans.validate((err) => {
          if (err) {
            const unexpectedFailureError = new Error('Unexpected failure!');
            done(unexpectedFailureError);
          } else {
            expect(trans.transferType).to.not.equal('INTER')
            expect(trans.frequency).to.not.equal('ABCD')
            expect(trans.creditorAccountDetails.accountType).to.not.equal('SAVE')
            expect(trans.creditorAccountDetails.beneficiaryType).to.not.equal('CDET')
            expect(trans.debitorAccountDetails.accountType).to.not.equal('XYZ')
            done();
          }
        });
      });   
})
