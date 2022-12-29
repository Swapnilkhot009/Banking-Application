
const chai=require('chai');
const expect=chai.expect;
const sinonChai=require('sinon-chai');
chai.use(sinonChai);
const rewire=require('rewire');
const request=require('supertest');
chai.should();

let trans_details=require('../model/transaction');

let app=rewire('../index');
describe('Testing routes',()=>{
    describe('Testing Account Details route',()=>{
        
        it('Get /account-details  by customer ID',(done)=>{
            request(app).post('/account-details')
            .expect(200)
            .end((err,response)=>{
                
                done(err);
            });
        });    
    })
    describe('Testing Customer routes',()=>{
        it('POST /register should successfully create new customer',(done)=>{
            
            request(app).post('/register')
            .expect(201)
            .end((err,response)=>{
              
                done(err);
            });
        });
        it('GET /getCustomerDetails should successfully return customer',(done)=>{
            request(app).post('/getCustomerDetails')
            .expect(201)
            .end((err,response)=>{
                
                done(err);
            });
        });
    });

    describe('Testing Bank Details route',()=>{

        it('GET /bank-details should successfully return bank details',(done)=>{
            request(app).get('/bank-details')
            .expect(200)
            .end((err)=>{
                done(err);
            })
        })
        it('POST /add-bank should successfully create new bank details',(done)=>{
           request(app).post('/add-bank')
            .expect(200)
            .end((err,response)=>{
               // console.log(response)
                done(err);
            })
    })
        
    })
    describe('Testing Transaction route',()=>{
        let sampleTrans;
        beforeEach((done)=>{
            sampleTrans={
                amount: 100,customerID: 1234567890,transactionDate:"2022-12-21" ,transferType:"EXTERNAL",frequency:"RECURRING",
                creditorAccountDetails:{accountNo: 12345678,accountType:"CURRENT",
                beneficiaryType:"PERSONEL",beneficiaryDetails: {name: "Raj K",address: "Baner Road Mumbai",phone: 9999999999,email: "Raj123@gmail.com",      
                beneficiaryBankInformation:{ bankCode: "IFSCC",bankName: "ICICI BANK OF INDIA"}}  
                }, debitorAccountDetails: {accountNo: 12345678,accountType: "CURRENT",accountName: "Max p",   
                debitorBankInformation:{bankCode: "SBIN0",bankName: "STATE BANK OF INDIA"}}
            };
            
                trans_details.deleteMany({}, (err) => { 
                   done();           
                }); 
            
        });
       
        it('POST /create-transfer should successfully create new bank details',(done)=>{
            request(app).post('/create-transfer')
            .send(sampleTrans)
            .expect(201)
            .end((err,response)=>{
                expect(response.text.length).to.equal(16)
                done(err);
            })     
    })
        
    })


})