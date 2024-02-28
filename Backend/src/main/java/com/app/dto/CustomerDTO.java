package com.app.dto;

public class CustomerDTO {
private int id;
private String firstName;
private String lastName;
private String email;
private String contactNo;
private Integer houseNo;
private String street;
private String area;
private String landmark;

public CustomerDTO() {
	System.out.println("in customer DTO");
}
//id firstName lastName email contactNo houseNo street area landmark
public CustomerDTO(int id, String firstName, String lastName, String email, String contactNo, Integer houseNo,
		String street, String area, String landmark) {
	super();
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.contactNo = contactNo;
	this.houseNo = houseNo;
	this.street = street;
	this.area = area;
	this.landmark = landmark;
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

@Override
public String toString() {
	return "CustomerDTO [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
			+ ", contactNo=" + contactNo + ", houseNo=" + houseNo + ", street=" + street + ", area=" + area
			+ ", landmark=" + landmark + "]";
}











}
