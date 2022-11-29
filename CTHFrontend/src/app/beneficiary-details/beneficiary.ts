import { BeneficiaryBank } from "./bankInformation";

export class Beneficiary{
    name?:String;
    address?: String;
    phone?:number;
    email?:String
    beneficiaryBankInformation!: BeneficiaryBank;
}