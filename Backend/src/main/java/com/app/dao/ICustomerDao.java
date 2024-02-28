package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Customer;

public interface ICustomerDao extends JpaRepository<Customer,Integer> {

	Customer findByEmail(String email);

	Customer findByEmailAndPassword(String email, String password);

}
