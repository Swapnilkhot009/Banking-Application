const sinon=require('sinon');
const sandbox=sinon.createSandbox();
const accCont=require('../controller/accountDetailsService');
const accModel=require('../model/accountDetails');
const { spy, stub } = require('sinon');
const chai = require('chai');
const expect=chai.expect;
chai.should();
describe("Account controller functions",()=>{

    let req={
        body:{
            customerID: 1234567890,
            accountNumber: 67676767,
            accountType: "SAVINGS",
            acconutName: "BUSINESS",
            accountBalance: 100000
        }
        
    },
     status,json,res;
        beforeEach(()=>{
            status=stub();
            json=spy();
            res={
                json,status
            };
            status.returns(res);
        });
    
    
    describe('Get the account details of customer',()=>{
       
        it('It should get the account by ID',async()=>{
            sandbox.stub(accModel,'find');
            await accCont.getAccountDetails(req,res);
            sinon.assert.calledWith(accModel.find,{customerID: 1234567890});
            status.calledWith(200).should.be.ok;      
        })    
    })

})
