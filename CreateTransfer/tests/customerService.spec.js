const sinon=require('sinon');
const sandbox=sinon.createSandbox();
const custCont=require('../controller/customerService');
const custModel=require('../model/customerDetails');
const { spy, stub } = require('sinon');
const chai = require('chai');
const expect=chai.expect;
chai.should();
describe("Customer controller functions",()=>{

    let req={
        body:{
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
        let expected={
            "customerID": 12340,
            "customerName": "Vennela",
            "customerAddress": "Vijayawada",
            "ssn": 123456789012,
            "customerPhoneNumber": 9515473545,
            "customerEmailId": "vennela@gmail.com",
            "bankCode": "Atlantis01",
            "bankName": "Atlantis",
            "okToMail": false,
            "okToCall": false,
            "okToText": false
          }
    
    
    describe('Create a new customer',()=>{
       it ('It should create new customer object',async()=>{
            sandbox.stub(custModel,'create');
            await custCont.newCustomer(req,res);
            sinon.assert.calledWith(custModel.create,req.body);
            status.calledWith(201).should.be.ok;
            
       })
        it('It should get the customer by ID',async()=>{
            sandbox.stub(custModel,'findOne');
            await custCont.getCustomerDetails(req,res);
            sinon.assert.calledWith(custModel.findOne,{customerID: req.body.customerID});
            status.calledWith(201).should.be.ok;
        })
        
        
    })

})