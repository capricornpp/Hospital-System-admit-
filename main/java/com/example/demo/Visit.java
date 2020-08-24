package com.example.demo;

import lombok.Data;
import javax.persistence.*;
import java.util.Set;
import java.util.Date;
@Data
@Entity
@Table(name = "visit")
public class Visit {
    @Id
    @GeneratedValue
    private Long id;

    private String firstname;
    private String lastname;
    private String perID;
    private String tel;
    private Date date;

	@ManyToOne
	private	SaveRoom saveroom;

    private Visit(){}

    public Visit(SaveRoom saveroom,String firstname,String lastname,String perID,String tel, Date date){
        this.saveroom = saveroom;
        this.firstname = firstname;
        this.lastname = lastname;
        this.perID = perID;
        this.tel = tel;
        this.date = date;
    }
}
