 package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ICustomerDao;
import com.app.dto.CustomerDTO;
import com.app.exception.AppException;
import com.app.pojos.Customer;
import com.app.pojos.ServiceProvider;

@Service
@Transactional
public class ICustomerServiceImpl implements ICustomerService {

	@Autowired
	ICustomerDao icustdao;
	@Override
	public CustomerDTO findCustomerByID(int id) {
		Customer cust;
		try {
			cust = icustdao.findById(id).orElseThrow(() -> new AppException("invalid customer id"));
			CustomerDTO custdto =new CustomerDTO();
			BeanUtils.copyProperties(cust, custdto, "password");
			return custdto;
		} catch (AppException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}
	
	public boolean validateCustomerData(Customer customer) throws AppException
	{
		String firstname = customer.getFirstName();
		String lastname = customer.getLastName();
		String email = customer.getEmail();
		String password = customer.getPassword();
		String contact = customer.getContactNo();
	
		if(firstname != null && lastname != null && email != null && password != null && contact != null)
		{
			//Validate email
			String regExEmail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
			boolean isValidEmail = email.matches(regExEmail);
			
			String regExContact = "(0/91)?[7-9][0-9]{9}";
			boolean isValidContact = contact.matches(regExContact);
			
			if(isValidEmail && isValidContact )
			{
				return true;
				
			}
			else
			{
				throw new AppException("Please Enter valid Email and Phone Number !!!");
			}
			
		}
		
		throw new AppException("Customer Fields Can not be Empty!!!!");
		
	}
	
	public boolean validateAddressData (Customer customer) throws AppException
	{
		if(customer.getHouseNo() != null && customer.getStreet() != null && customer.getArea() != null && customer.getLandmark() != null )
		{
			return true;
		}
		throw new AppException("Address fields can not be empty!!");
	}
	
	public boolean validateRegistration(Customer customer) throws AppException
	{
		if(validateCustomerData(customer) && validateAddressData(customer))
		{
			return true;
		}
		throw new AppException("Invalid Customer Registration Data");
	}
	
	@Override
	public Customer registerCustomer(Customer cust) throws AppException {
		// TODO Auto-generated method stub
		//before registration validation required
		if(validateRegistration(cust))
		{
			String email = cust.getEmail();
			
			//find if there is a customer of same email 
			Customer isExist = icustdao.findByEmail(email);
			
			//if not exist
			if(isExist == null)
			{
				//save
				return icustdao.save(cust);
			}
			else
			{
				//already exist
				throw new AppException("Email Already Registered!!");
			}
		}
		//Registration Data is Invalid
		throw new AppException("Invalid data Submitted For Customer registration !!!");
	}

	
	
	@Override
	public CustomerDTO authenticateCustomer(String email, String password) throws AppException 
	{
		
		Customer isAvailable = null;
		CustomerDTO cdto = null;
		if(email != null && password != null)
			isAvailable = icustdao.findByEmailAndPassword(email,password);
		else
			throw new AppException("Credentials can't be Empty!!!");
		
		if(isAvailable !=null)
			{
		if(isAvailable.getPassword().equals(password)) {
			cdto=new CustomerDTO();
			BeanUtils.copyProperties(isAvailable, cdto, "password");
			
		}else {
			throw new AppException("invalid details");
		}
	 
	}
		else {
			throw new AppException("No Such Customer Exist");
		}
		return cdto;
		
		
	}
	
	
	

	
}
