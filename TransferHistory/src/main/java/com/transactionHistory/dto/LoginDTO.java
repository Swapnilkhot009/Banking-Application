package com.transactionHistory.dto;

import javax.validation.constraints.NotEmpty;

public class LoginDTO {
	
	@NotEmpty(message = "User name is needed for login")
	private String userName;
	@NotEmpty(message = "Password is needed for login")
	private String password;
	private long customerID;
	
	public LoginDTO() {
		super();
		// TODO Auto-generated constructor stub
	}



	public LoginDTO(@NotEmpty(message = "User name is needed for login") String userName,
			@NotEmpty(message = "Password is needed for login") String password, long customerID) {
		super();

		this.userName = userName;
		this.password = password;
		this.customerID = customerID;
	}



	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getCustomerID() {
		return customerID;
	}

	public void setCustomerID(long customerID) {
		this.customerID = customerID;
	}

}
