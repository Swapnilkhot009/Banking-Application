package com.transactionHistory.entity;


public class beneficiaryDetail {
	private String name;
	private String address;
	private double phone;
	private String email;
	private bankInformation beneficiaryBankInformation;
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
	public bankInformation getBeneficiaryBankInformation() {
		return beneficiaryBankInformation;
	}
	public void setBeneficiaryBankInformation(bankInformation beneficiaryBankInformation) {
		this.beneficiaryBankInformation = beneficiaryBankInformation;
	}
	
}
