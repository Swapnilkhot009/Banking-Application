package com.transactionHistory.registory;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.transactionHistory.entity.Login;

@Repository
public interface loginRepository extends MongoRepository<Login,Integer>{
	
	@Query("{userName:?0}")
	Login findByUserName(String userName);
}
