package com.app.pojos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "system_log")
@JsonIgnoreProperties({"vendor","cust"})
public class SystemLog
{
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private int logNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cust_id") //FK/dao method with respect to name itself findByCustID***
//	@JsonIgnoreProperties("")
	private Customer cust;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "vendor_id") //FK
	private ServiceProvider vendor;

	@Column(name = "customer_email")
	private String customerEmail;
	
	@Column(name = "vendor_email")
	private String vendorEmail;
	
	@Column(name = " service_type")
	private String serviceType;
	
	@Column(name = "cost")
	private int cost;
	
	@Column(name = "experience")
	private int experience;

	
	

	public String getServiceType() {
		return serviceType;
	}


	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}


	public int getCost() {
		return cost;
	}


	public void setCost(int cost) {
		this.cost = cost;
	}


	public int getExperience() {
		return experience;
	}


	public void setExperience(int experience) {
		this.experience = experience;
	}


	public int getLogNo() {
		return logNo;
	}


	public void setLogNo(int logNo) {
		this.logNo = logNo;
	}


	public Customer getCust() {
		return cust;
	}


	public void setCust(Customer cust) {
		this.cust = cust;
	}


	public ServiceProvider getVendor() {
		return vendor;
	}


	public void setVendor(ServiceProvider vendor) {
		this.vendor = vendor;
	}


	public String getCustomerEmail() {
		return customerEmail;
	}


	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}


	public String getVendorEmail() {
		return vendorEmail;
	}


	public void setVendorEmail(String vendorEmail) {
		this.vendorEmail = vendorEmail;
	}

	public SystemLog() {
		// TODO Auto-generated constructor stub
	}


	public SystemLog(int logNo, Customer cust, ServiceProvider vendor, String customerEmail, String vendorEmail,
			String serviceType, int cost, int experience) {
		super();
		this.logNo = logNo;
		this.cust = cust;
		this.vendor = vendor;
		this.customerEmail = customerEmail;
		this.vendorEmail = vendorEmail;
		this.serviceType = serviceType;
		this.cost = cost;
		this.experience = experience;
	}


	@Override
	public String toString() {
		return "SystemLog [logNo=" + logNo + ", cust=" + cust + ", vendor=" + vendor + ", customerEmail="
				+ customerEmail + ", vendorEmail=" + vendorEmail + ", serviceType=" + serviceType + ", cost=" + cost
				+ ", experience=" + experience + "]";
	}

}
