import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BeneficiaryBank } from '../beneficiary-details/bankInformation';
import { BankdetailsService } from '../services/bankdetails.service';
import { TransactionService } from '../services/transaction.service';
import { Debitor } from './debitor';
@Component({
  selector: 'app-debitor-account-details',
  templateUrl: './debitor-account-details.component.html',
  styleUrls: ['./debitor-account-details.component.css']
})
export class DebitorAccountDetailsComponent implements OnInit {

  constructor(private httpClient: HttpClient,private bankDetSer: BankdetailsService,private formBuilder : FormBuilder,private route:Router,private transactionSer:TransactionService) { }

  debitorForm!: FormGroup;
  debitor!: Debitor;
  bankDetails:any=[]
  bankCodes:string[]=[]
  bankCd!:String
  bankName:string=''
  public accountDetails:any;
  errorMessage!: string;
  accountNumbers:string[]=[]
  accountNumber!:string
  ngOnInit(): void {
    this.debitor = this.transactionSer.getDebitorsDetails()??new Debitor();
    this.debitor.debitorBankInformation = this.debitor.debitorBankInformation??new BeneficiaryBank();
    this.debitorForm = this.formBuilder.group({
      accountNo:[this.debitor.accountNo,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{8}$")]],
      accountType:[this.debitor.accountType,Validators.required],
      accountName:[this.debitor.accountName,Validators.required],
      debitorBankInformation: new FormGroup({
        bankCode:new FormControl(this.debitor.debitorBankInformation.bankCode,[Validators.required]),
        bankName: new FormControl(this.debitor.debitorBankInformation.bankName,[Validators.required])
      })
    })
    this.bankDetSer.getBankDetails().subscribe((data) => {
      this.bankDetails = data
      this.bankDetails.forEach((element:any) => {
        this.bankCodes.push(element.bankCode)
      }); 
    });
    this.httpClient.post('http://localhost:3000/account-details',{"customerID":sessionStorage.getItem("cID")}).subscribe({
      next: (data)=>{
        this.accountDetails=data;
        this.accountDetails.forEach((element: any) => {
          this.accountNumbers.push(element.accountNumber)
        });
        this.errorMessage='';
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      }}
    );
  }
  getBank(){
    this.bankDetails.forEach((element:any) => {
      if(element.bankCode===this.bankCd){this.bankName = element.bankName}
    });
  }
  get bankCode(){
    return this.debitorForm.controls;
  }
  navigateToTransaction(){
    this.debitor = this.debitorForm.value;
    this.transactionSer.setDebitorsDetails(this.debitor);
    this.route.navigate(['/transaction']);
  }

  goBack(){
    // window.history.back();
    this.route.navigate(['/creditorAccountDetails'])
  }

}
