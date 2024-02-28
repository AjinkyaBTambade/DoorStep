package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IAdminDao;
import com.app.dto.AdminDTO;
import com.app.dto.CustomerDTO;
import com.app.dto.ResponseDTO;
import com.app.dto.ServiceProviderDTO;
import com.app.exception.AppException;
import com.app.pojos.Admin;
import com.app.pojos.Customer;
import com.app.pojos.ServiceProvider;
import com.app.service.IAdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	private IAdminDao iadao;
	
	@Autowired
	private IAdminService adminServices;
	
	@GetMapping("/AllVendors")
	public ResponseEntity<?> getAllVendors(){
		List<ServiceProviderDTO> li =null;
		li = adminServices.getAllServiceProviders();
		
		if(li.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(li,HttpStatus.OK);
	}
	
	@GetMapping("/AllCustomers")
	public ResponseEntity<?> getAllCustomers()
	{
		List<CustomerDTO> li = null;
		li = adminServices.getAllCustomers();
		
		if(li.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(li,HttpStatus.OK);
	}
	
	@GetMapping("/AllVendors/{id}") 
	public ResponseEntity<?> getVendorByID(@PathVariable int id)
	{
		Optional<ServiceProvider> sp = null;
		sp = adminServices.findById(id);
		if(sp.isPresent())
			return new ResponseEntity<>(sp,HttpStatus.OK);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

@GetMapping("/AllCustomers/{id}") 
	public ResponseEntity<?> getCustomerByID(@PathVariable int id)
	{
		Optional<Customer> cust = null;
		cust = adminServices.findCustById(id);
		if(cust.isPresent())
			return new ResponseEntity<>(cust,HttpStatus.OK);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	
	@PostMapping("/AddVendor")
	public ResponseEntity<?> addServiceProvider(@RequestBody ServiceProvider vendor) throws AppException
	{
		try {
			ServiceProviderDTO isRegistered = adminServices.saveServiceProvider(vendor);
			if(isRegistered!= null)
				return new ResponseEntity<>(HttpStatus.OK);
			else
				throw new AppException("Invalid Registration Of Service Provider!!!");
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteVendor(@PathVariable int id) throws AppException
	{
		try {
			 return new ResponseEntity<>(adminServices.deleteServiceProviderByID(id),HttpStatus.OK);
		} catch (RuntimeException e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	
	}
	
	@DeleteMapping("/customer/{id}")
	public ResponseEntity<?> deleteCustomer(@PathVariable int id) throws AppException
	{
		try {
			 return new ResponseEntity<>(adminServices.deleteCustomerByID(id),HttpStatus.OK);
		} catch (RuntimeException e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	
	}
	
	@PutMapping("/{servId}")
	public ResponseEntity<?> updateServiceProvider(@PathVariable int servId,@RequestBody ServiceProviderDTO details) throws AppException{
		System.out.println("In ID"+servId+ "details"+details);
		details.setId(servId);
	
	try {
		return new ResponseEntity<>(adminServices.updateServiceProvider(servId, details), HttpStatus.CREATED);
	} catch (RuntimeException e) {
		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> getUserDetails(@ModelAttribute Admin ad) {
		System.out.println("in get user dtls " + ad.getEmail()+ad.getPassword());
		try{
			return ResponseEntity.ok(new ResponseDTO<>(adminServices.getAdminDetails(ad.getEmail(),ad.getPassword())));
		}catch (Exception e) {
			return new ResponseEntity<>(new ResponseDTO<>("invalid email and password"),
					HttpStatus.NOT_FOUND);
		}
	}
	
	
		
}
	
