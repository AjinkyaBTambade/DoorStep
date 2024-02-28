package com.app.pojos;



import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="customer")
@JsonIgnoreProperties({"systemLog","serviceProviders"})
public class Customer
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
	
	@Column(length = 20,unique = true)
	@NotBlank(message = "Email is required")
	@Length(min = 5,max=20,message = "Invalid Email length")
	@Email(message = "Invalid email format")
	private String email;
	
	@Column(length = 20,nullable = false)
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Invalid password!")
//	@JsonIgnore
	private String password;
	
	@Column(name="contact",length =10)
	private String contactNo;
	
	@Column(length =20)
	private Integer houseNo;
	
	@Column(length =20)
	private String street;
	
	@Column(length =20)
	private String area;
	
	@Column(length =20)
	private String landmark;
    
	@OneToMany(mappedBy = "cust", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<SystemLog> systemLog = new ArrayList<>();

	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.PERSIST })
	@JoinTable(name = "cust_ServiceProvider", 
	joinColumns = @JoinColumn(name = "customer_id"),
	inverseJoinColumns = @JoinColumn(name = "serviceprovider_id"))
	
	private List<ServiceProvider> serviceProviders = new ArrayList<>();
	
//	@OneToMany(mappedBy = "acctOwner",cascade = CascadeType.ALL,orphanRemoval = true)
//	private List<BankAccount> accounts=new ArrayList<>();
	
//	@JsonIgnore
//    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL,orphanRemoval = true )
//	private List<ServiceProvider> serviceProviders = new ArrayList<>();
	
	
	public Customer()
	{
		System.out.println("In Customer Pojo");
	}

	public Customer(int id, String firstName, String lastName, String email, String password, String contactNo,
			int houseNo, String street, String area, String landmark)
	{
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.contactNo = contactNo;
		this.houseNo = houseNo;
		this.street = street;
		this.area = area;
		this.landmark = landmark;
	}


	@Override
	public String toString() {
		return "Customer [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", contactNo=" + contactNo + ", houseNo=" + houseNo + ", street=" + street
				+ ", area=" + area + ", landmark=" + landmark + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public Integer getHouseNo() {
		return houseNo;
	}

	public void setHouseNo(Integer houseNo) {
		this.houseNo = houseNo;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getLandmark() {
		return landmark;
	}

	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}

	public List<SystemLog> getSystemLog() {
		return systemLog;
	}

	public void setSystemLog(List<SystemLog> systemLog) {
		this.systemLog = systemLog;
	}

	public List<ServiceProvider> getServiceProviders() {
		return serviceProviders;
	}

	public void setServiceProviders(List<ServiceProvider> serviceProviders) {
		this.serviceProviders = serviceProviders;
	}

	
	
//	public List<ServiceProvider> getServiceProviders() {
//		return serviceProviders;
//	}
//
//	public void setServiceProviders(List<ServiceProvider> serviceProviders) {
//		this.serviceProviders = serviceProviders;
//	}

	
	
	//helper methods to add n remove acct
//		public void addAccount(BankAccount a)
//		{
//			accounts.add(a);
//			a.setAcctOwner(this);
//		}
//		public void removeAccount(BankAccount a)
//		{
//			accounts.remove(a);
//			a.setAcctOwner(null);
//		}
	
	//helper methods to add n remove serviceproviders
//		public void addServiceProvider(ServiceProvider s)
//		{
//			serviceProviders.add(s);
//			s.setCustomer(this);
//		}
//		public void removeServiceProvider(ServiceProvider s)
//		{
//			serviceProviders.remove(s);
//			s.setCustomer(null);
//		}
	
	
	
}
