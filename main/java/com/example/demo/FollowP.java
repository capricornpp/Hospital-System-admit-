package com.example.demo;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;
import java.util.Date;

@Data
@Entity
@Table(name = "FollowP")
public class FollowP {
    @Id
    @GeneratedValue
    private Long id;
    private Date datetime;
    
	private String sad;
    private String worry;
    private String happy;
    private String pain;
    private String tried;
    private String squeamish;
    private String sleepy;
    private String anorexia;
    private String tried2;
    private String details;
   
      private String f_patient;
     private String f_nurse;
   
  

    @ManyToOne
    @JoinColumn(name = "PatientSave_id")
    private PatientSave patientSave;
    

    @ManyToOne
    @JoinColumn(name = "UserLogin_id")
    private UserLogin userLogin;

   /* @ManyToOne
    @JoinColumn(name = "SaveRoom_id")
    private SaveRoom saveRoom;*/

    


    private FollowP(){}

    public FollowP(Date datetime, String sad, String worry, String happy, String pain,
                    String tried, String squeamish, String sleepy, String anorexia,String tried2,String details, 
                   PatientSave patientSave, UserLogin userLogin,String f_patient,String f_nurse){
    
        this.datetime = datetime;
        this.sad = sad;
        this.worry = worry;
        this.happy = happy;
        this.pain = pain;
        this.tried = tried;
        this.squeamish = squeamish;
        this.sleepy = sleepy;
        this.anorexia = anorexia;
        this.tried2 = tried2;
        this.details = details;

        
        this.userLogin = userLogin;
        this.patientSave = patientSave;
        this.f_patient = f_patient;
        this.f_nurse = f_nurse;
        
    }
}
