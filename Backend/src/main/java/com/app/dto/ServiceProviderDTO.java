package com.app.dto;

public class ServiceProviderDTO {
	private int id;
	private String firstName;
	private String lastName;
	private String serviceType;
	private Integer serviceCost;
	private String email;
	private String contactNo;
    private Integer experience;
	private Float rating;
	
	public ServiceProviderDTO() {
		System.out.println("in serviceproviderDTO");
	}

	public ServiceProviderDTO(int id, String firstName, String lastName, String serviceType, Integer serviceCost,
			String email, String contactNo, Integer experience, Float rating) {
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

	public Integer getServiceCost() {
		return serviceCost;
	}

	public void setServiceCost(Integer serviceCost) {
		this.serviceCost = serviceCost;
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

	@Override
	public String toString() {
		return "ServiceProviderDTO [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", serviceType="
				+ serviceType + ", serviceCost=" + serviceCost + ", email=" + email + ", contactNo=" + contactNo
				+ ", experience=" + experience + ", rating=" + rating + "]";
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
