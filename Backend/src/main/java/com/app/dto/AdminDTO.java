package com.app.dto;


public class AdminDTO {
	private int Id;
	private String email;
	
	private String name;
	
	public AdminDTO() {
		// TODO Auto-generated constructor stub
	}

	public AdminDTO(int id, String email, String name) {
		super();
		Id = id;
		this.email = email;
		this.name = name;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "AdminDTO [Id=" + Id + ", email=" + email + ", name=" + name + "]";
	}
	

}
