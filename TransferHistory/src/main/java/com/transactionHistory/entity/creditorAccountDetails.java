package com.transactionHistory.entity;

import com.transactionHistory.dto.beneficiaryDetailDTO;

public class creditorAccountDetails {
	private int accountNo;
	private String accountType;
	private String beneficiaryType;
	private beneficiaryDetailDTO beneficiaryDetails;
	
	public creditorAccountDetails() {
		super();
	}
	

	public creditorAccountDetails(int accountNo,String accountType,String beneficiaryType,
			beneficiaryDetailDTO beneficiaryDetails) {
		super();
		this.accountNo = accountNo;
		this.accountType = accountType;
		this.beneficiaryType = beneficiaryType;
		this.beneficiaryDetails = beneficiaryDetails;
	}


	public int getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(int accountNo) {
		this.accountNo = accountNo;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public String getBeneficiaryType() {
		return beneficiaryType;
	}

	public void setBeneficiaryType(String beneficiaryType) {
		this.beneficiaryType = beneficiaryType;
	}

	public beneficiaryDetailDTO getBeneficiaryDetails() {
		return beneficiaryDetails;
	}

	public void setBeneficiaryDetails(beneficiaryDetailDTO beneficiaryDetails) {
		this.beneficiaryDetails = beneficiaryDetails;
	}

	@Override
	public String toString() {
		return "creditorAccountDetailsDTO [accountNo=" + accountNo + ", accountType=" + accountType
				+ ", beneficiaryType=" + beneficiaryType + ", beneficiaryDetails=" + beneficiaryDetails.toString() + "]";
	}
	
	
}
