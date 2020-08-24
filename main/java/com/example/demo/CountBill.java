package com.example.demo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class CountBill {

    @Id
    @GeneratedValue
    private Long id;

    private Date time;

    @OneToOne
    private PharmacyLetter medicien;

    @OneToOne
    private SaveRoom room;

    @ManyToOne
    private UserLogin financer;

    @ManyToOne
    private PatientSave patient;

    private CountBill() {}

    public CountBill(PharmacyLetter medicien, SaveRoom room, UserLogin financer, PatientSave patient) {
        this.time = new Date();
        this.room = room;
        this.medicien = medicien;
        this.financer = financer;
        this.patient = patient;
    }
}