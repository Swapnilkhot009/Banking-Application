package com.transactionHistory.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;


public class beneficiaryDetailDTO {
	private String name;
	private String address;
	@Size(message = "phonenumber has to be 10 digits")
	private double phone;
	@Email(message = "Enter a valid email id")
	private String email;
	private bankInformationDTO beneficiaryBankInformation;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getPhone() {
		return phone;
	}
	public void setPhone(double phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public bankInformationDTO getBeneficiaryBankInformation() {
		return beneficiaryBankInformation;
	}
	public void setBeneficiaryBankInformation(bankInformationDTO beneficiaryBankInformation) {
		this.beneficiaryBankInformation = beneficiaryBankInformation;
	}
	
}
