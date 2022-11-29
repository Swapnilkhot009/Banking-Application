import { EventEmitter, Injectable } from '@angular/core';
import { Beneficiary } from '../beneficiary-details/beneficiary';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor() { }
  beneficiaryData:Beneficiary=new Beneficiary();

  setBeneficiaryData(data:Beneficiary){
    this.beneficiaryData = data
  }
  beneficiaryEvent = new EventEmitter<Beneficiary>;
  beneficiaryEventEmit(data :Beneficiary){
    this.beneficiaryEvent.emit(data);
  }
}
