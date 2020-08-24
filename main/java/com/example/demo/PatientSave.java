package com.example.demo;

import lombok.Data;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity

public class PatientSave {

    @Id
    @GeneratedValue
    private Long pid;
    private String firstName; //ชื่อ
    private String patientLastName; //นามสกุล
    private String patientPersonId; //รหัสบัตรประชาชน
    private String patientAge; //อายุ
    private String patientHight;    //สูง
    private String patientWeight;   //น้ำหนัก
    private String patientBloodtype;    //กรุ๊ปเลือด
    private String patientAddress;  //ที่อยู่
    private String patientCareer;   //อาชีพ
    private String patientStatus;   //สถานะ
    private String patientPhone;    //หมายเลขโทรศัพท์
    private String patientSymptom;  //อาการ
    private String allergy;

    @ManyToOne
    private UserLogin userLogin;



    private PatientSave(){}

    public PatientSave(String firstName
            , String patientLastName, String patientPersonId, String patientAge
            , String patientHight, String patientWeight, String patientBloodtype, String patientAddress, String patientCareer,
                       String patientStatus, String patientPhone, String patientSymptom, String allergy,UserLogin id
    ){
        this.firstName = firstName;
        this.patientLastName = patientLastName;
        this.patientPersonId = patientPersonId;
        this.patientAge = patientAge;
        this.patientHight = patientHight;
        this.patientWeight = patientWeight;
        this.patientBloodtype = patientBloodtype;
        this.patientAddress = patientAddress;
        this.patientCareer = patientCareer;
        this.patientStatus = patientStatus;
        this.patientPhone = patientPhone;
        this.patientSymptom = patientSymptom;
        this.allergy = allergy;
        this.userLogin = id;





    }
    public PatientSave(String firstName, String patientLastName, String allergy) {
        this.firstName = firstName;
        this.patientLastName = patientLastName;
        this.allergy = allergy;
    }

}
