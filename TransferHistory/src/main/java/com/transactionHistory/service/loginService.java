package com.transactionHistory.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
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
	@Autowired
	private Environment environment;
	
	public long login(LoginDTO loginDTO) throws InvalidCredentialsException  {
		Login login =loginRepository.findByUserName(loginDTO.getUserName());
		if(login==null) {
			throw new InvalidCredentialsException(environment.getProperty("Invalid.Credentials"));
		}else {
			if(new BCryptPasswordEncoder().matches(loginDTO.getPassword(),login.getPassword()))
				return login.getCustomerID();
			else
				throw new InvalidCredentialsException(environment.getProperty("Invalid.Credentials"));
		}
		
	}
	
	public Boolean register(LoginDTO loginDTO) throws InvalidCredentialsException {
		loginDTO.setPassword(new BCryptPasswordEncoder().encode(loginDTO.getPassword()));
		Login userDetails = modelMapper.map(loginDTO, Login.class);
		Login success;
		try {
		success = loginRepository.save(userDetails);
		} catch(Exception e) {
			if(e.getMessage().contains("userName"))
				throw new InvalidCredentialsException(environment.getProperty("Invalid.user"));
			else
				throw new InvalidCredentialsException(environment.getProperty("Invalid.customerID"));
		}
		System.out.println(success);
		if(success==null) {
			throw new InvalidCredentialsException(environment.getProperty("Invalid.user"));
		}
		else {
			return true;
		}
	}

}
