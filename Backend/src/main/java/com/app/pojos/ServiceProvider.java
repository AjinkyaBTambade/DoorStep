package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.FetchMode;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.ManyToAny;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="service_provider")
@JsonIgnoreProperties({"systemLog","users"})
public class ServiceProvider
{

	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "first_name",length =20)
	@NotBlank(message = "name must be supplied")
	private String firstName;
	
	@Column(name="last_name",length =20)
	@NotBlank(message = "name must be supplied")
	private String lastName;
	
	@Column(name="service_type")
	private String serviceType;
	
	@Column(name="cost")
	private Integer serviceCost;
	
	@Column(length = 20,unique = true)
	@NotBlank(message = "Email is required")
	@Length(min = 5,max=20,message = "Invalid Email length")
	@Email(message = "Invalid email format")
	private String email;
	
	@Column(name="contact", length = 10)
	private String contactNo;
	
	
	private int experience;
	
	private Float rating;
	
	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<SystemLog> systemLog = new ArrayList<>();
	
	
	@ManyToMany(cascade = {CascadeType.MERGE,CascadeType.PERSIST},mappedBy = "serviceProviders", fetch = FetchType.EAGER)
	//@JsonIgnoreProperties("userBooks") // for preventing stackoverflow
	//@Fetch(FetchMode.JOIN)
	private List<Customer> users = new ArrayList<>();

//	@ManyToOne
//	@JoinColumn(name="v_id",nullable = false)
//	private Vendor acctOwner;
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name="c_id")
//	private Customer customer;
	

	
	public List<Customer> getUsers() {
		return users;
	}





	public void setUsers(List<Customer> users) {
		this.users = users;
	}





	public ServiceProvider()
	{
		System.out.println("in serviceProvider Pojo");
	}

	
	

	
	public ServiceProvider(int id, String firstName, String lastName, String serviceType, Integer serviceCost, String email,
			String contactNo, Integer experience, Float rating) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.serviceType = serviceType;
		this.serviceCost = serviceCost;
		this.email = email;
		this.contactNo = contactNo;
		this.experience = experience;
		this.rating = rating;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getServiceCost() {
		return serviceCost;
	}

	public void setServiceCost(Integer serviceCost) {
		this.serviceCost = serviceCost;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getServiceType() {
		return serviceType;
	}

	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	

	public Integer getExperience() {
		return experience;
	}





	public void setExperience(Integer experience) {
		this.experience = experience;
	}

	public Float getRating() {
		return rating;
	}

	public void setRating(Float rating) {
		this.rating = rating;
	}
	





	public List<SystemLog> getSystemLog() {
		return systemLog;
	}





	public void setSystemLog(List<SystemLog> systemLog) {
		this.systemLog = systemLog;
	}





	public void setExperience(int experience) {
		this.experience = experience;
	}





	@Override
	public String toString() {
		return "ServiceProvider [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", serviceType="
				+ serviceType + ", serviceCost=" + serviceCost + ", email=" + email + ", contactNo=" + contactNo
				+ ", experience=" + experience + ", rating=" + rating + "]";
	}
}
