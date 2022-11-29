import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiary } from '../beneficiary-details/beneficiary';
import { BeneficiaryService } from '../services/beneficiary.service';
import { CreditorService } from '../services/creditor.service';
import { TransactionService } from '../services/transaction.service';
import { Creditor } from './creditor';

@Component({
  selector: 'app-creditor-account-details',
  templateUrl: './creditor-account-details.component.html',
  styleUrls: ['./creditor-account-details.component.css']
})
export class CreditorAccountDetailsComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private route:Router,private creditorSer:CreditorService,
    private transactionSer:TransactionService,private httpClient: HttpClient) { }
  creditorForm!: FormGroup;
  creditor!: Creditor;
  public accountDetails:any;
  errorMessage!: string;
  accountNumbers:string[]=[]
  accountNumber!:string
  ngOnInit(): void {
    this.creditor = this.transactionSer.getCreditorDetails()??new Creditor();
    this.creditorForm = this.formBuilder.group({
      accountNo:[this.creditor.accountNo,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{8}$")]],
      accountType:[this.creditor.accountType,Validators.required],
      beneficiaryType:[this.creditor.beneficiaryType,Validators.required],
    })
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
  navigateToDebitor(){
    this.creditor = this.creditorForm.value;
    this.creditor.beneficiaryDetails =  this.creditorSer.getBeneficiaryDetails();  
    this.transactionSer.setCreditorDetails(this.creditor);
    this.route.navigate(['/debitorAccountDetails']);
  }

  goBack() {
    // window.history.back();
    this.route.navigate(['/beneficiaryDetails'])
    // window.history.back();
   }
  
}
