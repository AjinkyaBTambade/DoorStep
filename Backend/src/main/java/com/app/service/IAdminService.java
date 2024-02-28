package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.AdminDTO;
import com.app.dto.CustomerDTO;
import com.app.dto.ServiceProviderDTO;
import com.app.exception.AppException;
import com.app.pojos.Customer;
import com.app.pojos.ServiceProvider;

public interface IAdminService {
	//get all service Providers
	List<ServiceProviderDTO> getAllServiceProviders();
	
	//get All Customers
	List<CustomerDTO> getAllCustomers();
	
	//get Service PRoviders By Id
		Optional<ServiceProvider> findById(int id);
		
		//get Customer By Id
		Optional<Customer> findCustById(int id);
	
	//Add new Service Provider
	ServiceProviderDTO saveServiceProvider(ServiceProvider vendor) throws AppException;
	
	//delete Service Provider by Id
	String deleteServiceProviderByID(int id) throws AppException;
	
	//update service_provider
	ServiceProviderDTO updateServiceProvider(int id,ServiceProviderDTO ser) throws AppException;
	
	//admin login
	 AdminDTO getAdminDetails(String email,String password) throws Exception ;

	String deleteCustomerByID(int id) throws AppException;

	
}
