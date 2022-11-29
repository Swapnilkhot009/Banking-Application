package com.transactionHistory;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.transactionHistory.entity.transaction;
import com.transactionHistory.show.transactionShow;


@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class TransferHistoryApplication implements WebMvcConfigurer{

	public static void main(String[] args) {
		SpringApplication.run(TransferHistoryApplication.class, args);
		System.out.println("Hello");
	}

    @Bean
    ModelMapper modelMapper() {
        return new ModelMapper();
    }
    @Bean
    transaction transaction() {
    	return new transaction();
    }
    @Bean
    transactionShow transactionShow() {
    	return new transactionShow();
    }    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
    	registry.addMapping("/**").allowedMethods("GET","POST");
    	
    }
    
}
