import { Injectable } from '@angular/core';
import { Beneficiary } from '../beneficiary-details/beneficiary';
import { Creditor } from '../creditor-account-details/creditor';
import { BeneficiaryService } from './beneficiary.service';

@Injectable({
  providedIn: 'root'
})
export class CreditorService {
  constructor() { }
  creditor:Creditor=new Creditor();
  
  setBeneficiaryDetails(data:Beneficiary){
    this.creditor.beneficiaryDetails = data;
  }
  getBeneficiaryDetails(){
    return this.creditor.beneficiaryDetails;
  }
}
