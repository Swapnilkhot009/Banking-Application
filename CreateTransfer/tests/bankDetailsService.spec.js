const sinon=require('sinon');
const sandbox=sinon.createSandbox();
const bankCont=require('../controller/bankDetailsService');
const bankModel=require('../model/bankDetails');
const { spy, stub } = require('sinon');
const chai = require('chai');
const expect=chai.expect;
chai.should();
describe("Bank controller functions",()=>{

    let req={
        body:{
            bankCode:'SBI001',
            bankName:'State Bank',
            bankAddress:'Vijayawada'
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
       
    
    
    describe('Create and Get bank details',()=>{
       it ('It should create new bank object',async()=>{
            sandbox.stub(bankModel,'create');
            await bankCont.newBank(req,res);
            sinon.assert.calledWith(bankModel.create,req.body);
            status.calledWith(200).should.be.ok;
            
       })
        it('It should get the bank details',async()=>{
            sandbox.stub(bankModel,'find');
            await bankCont.getBankDetails(req,res);
            sinon.assert.calledWith(bankModel.find);
            status.calledWith(200).should.be.ok;
        })
        
        
    })

})
