package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller



public class PatientSaveController {

    @Autowired
    PatientSaveRepository patientSaveRepository;
    @Autowired
    UserLoginRepository userLoginRepository;




    @ResponseBody
    @RequestMapping(path = "/firstName/{firstName}/patientLastName/{patientLastName}/patientPersonId/{patientPersonId}/patientAge/{patientAge}/patientHight/{patientHight}/patientWeight/{patientWeight}" +
            "/patientBloodtype/{patientBloodtype}/patientAddress/{patientAddress}/patientCareer/{patientCareer}/patientStatus/{patientStatus}/patientPhone/{patientPhone}/patientSymptom/{patientSymptom}" +
            "/allergy/{allergy}/userLogin/{id}",method = RequestMethod.GET)

    public String creat( @PathVariable String firstName, @PathVariable String patientLastName, @PathVariable String patientPersonId, @PathVariable String patientAge, @PathVariable String patientHight,
                         @PathVariable String patientWeight, @PathVariable String patientBloodtype, @PathVariable String patientAddress, @PathVariable String patientCareer, @PathVariable String patientStatus,
                         @PathVariable String patientPhone, @PathVariable String patientSymptom, @PathVariable String allergy, @PathVariable String id){

        UserLogin userLogin = this.userLoginRepository.findByUserId(id);


        PatientSave creat = new PatientSave(firstName, patientLastName, patientPersonId, patientAge, patientHight, patientWeight, patientBloodtype, patientAddress,
                patientCareer, patientStatus, patientPhone, patientSymptom, allergy, userLogin);
        this.patientSaveRepository.save(creat);
        return "save";

    }
}
