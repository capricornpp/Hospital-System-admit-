package com.example.demo;

// import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
// import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class ServeDessert {

    @Id @GeneratedValue
	private Long id;
    private String name;

    // @OneToMany
    // private Set<ServeMenu> menu;

    private ServeDessert() {}

    public ServeDessert(String name) {
        this.name = name;
    }
}