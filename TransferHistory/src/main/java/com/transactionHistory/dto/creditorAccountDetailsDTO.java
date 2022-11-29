package com.transactionHistory.dto;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

//import org.springframework.data.mongodb.core.index.Indexed;



public class creditorAccountDetailsDTO {
//	@Indexed(unique = true, background = true)
	@Size(min = 10, max = 10, message = "accountNo has to be 8 digits")
	private int accountNo;
	@Pattern(regexp="SAVINGS | CURRENT | CHECKING", message = "account type needs to be SAVINGS, CURRENT, CHECKING")
	private String accountType;
	@Pattern(regexp="PERSONEL | BUSSINESS", message = "beneficiary type needs to be PERSONEL, BUSSINESS")
	private String beneficiaryType;
	private beneficiaryDetailDTO beneficiaryDetails;
	
	public creditorAccountDetailsDTO() {
		super();
	}
	

	public creditorAccountDetailsDTO(int accountNo,String accountType,String beneficiaryType,
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
