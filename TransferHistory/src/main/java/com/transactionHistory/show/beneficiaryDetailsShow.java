package com.transactionHistory.show;

public class beneficiaryDetailsShow {
	private String name;
	public beneficiaryDetailsShow() {
		super();
	}
	public beneficiaryDetailsShow(String name) {
		super();
		this.name = name;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "beneficiaryDetailDTO [name=" + name +"]";
	}
	
}
