package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.*;

@Controller
public class PatientAppoinmentLatterController {

    @Autowired PatientRepository patientRepository;
    @Autowired PatientAppoinmentLatterRepository patientAppoinmentLatterRepository;

    @ResponseBody
    @RequestMapping(path = "/saveBainut/{id}/{fD}/{lD}/{dept}/{date}/{time}/{prac}/{cmnt}", method = RequestMethod.GET)
    public String saveBainut(@PathVariable Long id,
                        @PathVariable String fD,
                        @PathVariable String lD,
                        @PathVariable String dept,
                        @PathVariable String date,
                        @PathVariable String time,
                        @PathVariable String prac,
                        @PathVariable String cmnt) {

        
        PatientAppoinmentLatter pal = new PatientAppoinmentLatter(fD, lD, dept , date, time, prac, cmnt);
        this.patientAppoinmentLatterRepository.save(pal);

        Patient p = this.patientRepository.findOne(id);
        Set<PatientAppoinmentLatter>baiNut = new HashSet<PatientAppoinmentLatter>(p.getPal());
        baiNut.add(pal);
        p.setPal(baiNut);

        this.patientRepository.save(p);
        return "{\"status\":\"Saved\"}";
    }
}