package com.transactionHistory.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.transactionHistory.Exception.InvalidCredentialsException;
import com.transactionHistory.dto.LoginDTO;
import com.transactionHistory.entity.Login;
import com.transactionHistory.registory.loginRepository;

@Service
@PropertySource("classpath:messages.properties")
public class loginService {
	
	@Autowired
	private loginRepository loginRepository;
	@Autowired
	private ModelMapper modelMapper;
	
	@Value("${Invalid.Credentials}")
	private String invalidCred;
	@Value("${Invalid.customerID}")
	private String invalidCustomerID;
	@Value("${Invalid.user}")
	private String invalidUser;
	
	public long login(LoginDTO loginDTO) throws InvalidCredentialsException  {
		Login login =loginRepository.findByUserName(loginDTO.getUserName());
		if(login==null) {
			throw new InvalidCredentialsException(invalidCred);
		}else {
			if(new BCryptPasswordEncoder().matches(loginDTO.getPassword(),login.getPassword()))
				return login.getCustomerID();
			else
				throw new InvalidCredentialsException(invalidCred);
		}
	}
	
	public Boolean register(LoginDTO loginDTO) throws InvalidCredentialsException {
		System.out.println("in login service");
		loginDTO.setPassword(new BCryptPasswordEncoder().encode(loginDTO.getPassword()));
		Login userDetails = modelMapper.map(loginDTO, Login.class);
		Login success;
		try {
		success = loginRepository.save(userDetails);
		} catch(Exception e) {
			if(e.getMessage().contains("userName"))
				throw new InvalidCredentialsException(invalidCred);
			else
				throw new InvalidCredentialsException(invalidCustomerID);
		}
		System.out.println(success);
		if(success==null) {
			throw new InvalidCredentialsException(invalidUser);
		}
		else {
			return true;
		}
	}

}
