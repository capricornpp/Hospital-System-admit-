package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;

import com.example.demo.Patient;
import lombok.Data;

@Data
@Entity
public class PatientAppoinmentLatter {

	private @Id @GeneratedValue Long id;
	private String FirstNameDocter;
	private String LastNameDocter;
	private String Department;
	private String DateOfAppointment;
	private String TimeOfAppointment;
	private String Practice;
	private String Comment;

	private PatientAppoinmentLatter() {}

	public PatientAppoinmentLatter(String FirstNameDocter, String LastNameDocter, String Department , String DateOfAppointment , String TimeOfAppointment,String Practice,String Comment) {
		this.FirstNameDocter = FirstNameDocter;
		this.LastNameDocter = LastNameDocter;
		this.Department = Department;
		this.DateOfAppointment = DateOfAppointment;
		this.TimeOfAppointment = TimeOfAppointment;
		this.Practice = Practice;
		this.Comment = Comment;
	}
}