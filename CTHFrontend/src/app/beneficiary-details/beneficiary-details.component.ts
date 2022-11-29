import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankdetailsService } from '../services/bankdetails.service';
import { BeneficiaryService } from '../services/beneficiary.service';
import { CreditorService } from '../services/creditor.service';
import { BeneficiaryBank } from './bankInformation';
import { Beneficiary } from './beneficiary';

@Component({
  selector: 'app-beneficiary-details',
  templateUrl: './beneficiary-details.component.html',
  styleUrls: ['./beneficiary-details.component.css']
})
export class BeneficiaryDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: Router, private creditorSer: CreditorService,
    private beneficiaryService: BeneficiaryService, private bankDetSer: BankdetailsService) { }

  beneficiary!: Beneficiary;
  bankInformation!: BeneficiaryBank;
  beneficiaryForm!: FormGroup;
  bankDetails:any=[]
  bankCodes:string[]=[]
  bankCode!:String
  bankName:string=''
  ngOnInit(): void {
    this.beneficiary = this.creditorSer.getBeneficiaryDetails() ?? new Beneficiary();
    this.beneficiary.beneficiaryBankInformation = this.beneficiary.beneficiaryBankInformation ?? new BeneficiaryBank();
    this.beneficiaryForm = this.formBuilder.group({
      name: [this.beneficiary.name, Validators.required],
      address: [this.beneficiary.address, Validators.required],
      phone: [this.beneficiary.phone, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: [this.beneficiary.email, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      beneficiaryBankInformation: new FormGroup({
        bankCode: new FormControl(this.beneficiary.beneficiaryBankInformation.bankCode, [Validators.required]),
        bankName: new FormControl(this.beneficiary.beneficiaryBankInformation.bankName, [Validators.required])
      })
    })
    this.bankDetSer.getBankDetails().subscribe((data) => {
      this.bankDetails = data
      this.bankDetails.forEach((element:any) => {
        this.bankCodes.push(element.bankCode)
      }); 
    });
  }
  getBank(){
    this.bankDetails.forEach((element:any) => {
      if(element.bankCode===this.bankCode){this.bankName = element.bankName}
    });
  }
  navigateToCreditor() {
    this.beneficiary = this.beneficiaryForm.value;
    this.creditorSer.setBeneficiaryDetails(this.beneficiary);
    this.route.navigate(['/creditorAccountDetails'])
  }

}
