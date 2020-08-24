package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class PharmacyLetter {

    @Id @GeneratedValue
    private Long id;
    private String pharmacistName;
    private String pharmacyListName;
    private String patientName;
    private String comment;

    private PharmacyLetter() {}

    public PharmacyLetter(String pharmacistName, String pharmacyListName, String patientName, String comment) {
        this.pharmacistName = pharmacistName;
        this.pharmacyListName = pharmacyListName;
        this.comment = comment; 
    }
}