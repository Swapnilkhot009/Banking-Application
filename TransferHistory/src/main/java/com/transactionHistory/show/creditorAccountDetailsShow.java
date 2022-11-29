package com.transactionHistory.show;

public class creditorAccountDetailsShow {
	private int accountNo;
	private beneficiaryDetailsShow beneficiaryDetails;
	
	public creditorAccountDetailsShow() {
		super();
	}
	

	public creditorAccountDetailsShow(int accountNo,
			beneficiaryDetailsShow beneficiaryDetails) {
		super();
		this.accountNo = accountNo;
		this.beneficiaryDetails = beneficiaryDetails;
	}


	public int getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(int accountNo) {
		this.accountNo = accountNo;
	}

	public beneficiaryDetailsShow getBeneficiaryDetails() {
		return beneficiaryDetails;
	}

	public void setBeneficiaryDetails(beneficiaryDetailsShow beneficiaryDetails) {
		this.beneficiaryDetails = beneficiaryDetails;
	}

	@Override
	public String toString() {
		return "creditorAccountDetailsDTO [accountNo=" + accountNo +", beneficiaryDetails=" + beneficiaryDetails.toString() + "]";
	}
}
