package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;
import javax.persistence.OneToMany;
import java.util.Set;
import java.util.HashSet;
import lombok.Getter;
import lombok.Setter;

import lombok.Data;

@Data
@Entity
public class Patient {

	private @Id @GeneratedValue Long id;
	private String firstName;
	private String lastName;
	private String birthDay;
	private int age;
	private String bloodType;
	private String nationality;
	
	@Setter
	@OneToMany
    private Set<PatientAppoinmentLatter> pal;

	private Patient() {}

	public Patient(String firstName, String lastName,String birthDay,int age, String bloodType, String nationality, Set<PatientAppoinmentLatter> pal) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDay = birthDay;
		this.age = age;
		this.bloodType = bloodType;
		this.nationality = nationality;
		this.pal = pal;
	}
}