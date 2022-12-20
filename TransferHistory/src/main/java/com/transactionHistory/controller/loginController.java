package com.transactionHistory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.transactionHistory.Exception.InvalidCredentialsException;
import com.transactionHistory.dto.LoginDTO;
import com.transactionHistory.service.loginService;

@SuppressWarnings("unused")
@RestController
public class loginController {
	
	@Autowired
	private loginService loginService;
	@PostMapping("/login")
	public ResponseEntity<Long> login(@RequestBody LoginDTO loginDTO) throws InvalidCredentialsException {
		long message = loginService.login(loginDTO);
		return new ResponseEntity<Long>(message,HttpStatus.OK);
		
	}
	
	@PostMapping("/newUser")
	public ResponseEntity<Boolean> newUser(@RequestBody LoginDTO loginDTO) throws InvalidCredentialsException{
		System.out.println("in login service");
		Boolean success = loginService.register(loginDTO);
		return ResponseEntity.ok().body(success);
	}
}
