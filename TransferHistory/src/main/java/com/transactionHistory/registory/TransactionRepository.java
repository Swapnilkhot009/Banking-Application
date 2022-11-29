package com.transactionHistory.registory;


import java.util.Set;

import javax.validation.Valid;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.transactionHistory.entity.transaction;

@Repository
public interface TransactionRepository extends MongoRepository<transaction, String>{
	@Query("{customerID:?0}")
	Set<transaction> findByCustomerId(@Valid long customer_id);

	@Query("{transactionReferenceNumber:?0}")
	transaction findByTransactionReferenceNumber(@Valid long transaction_id);
}
