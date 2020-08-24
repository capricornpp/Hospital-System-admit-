package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CountController {

	@Autowired CountBillRepository billRepository;
	@Autowired PharmacyListRepository medicineRepository;
	@Autowired PharmacyLetterRepository medicineFromRepository;
	@Autowired RoomRepository roomRepository;
	@Autowired SaveRoomRepository roomFormRepository;

	@Autowired UserLoginRepository financerRepository;
	@Autowired PatientSaveRepository patientRepository;

	@ResponseBody
	@RequestMapping(path = "/count/{id}", method = RequestMethod.GET)
	public String count(@PathVariable Long id) {
		PharmacyList medicine = this.medicineRepository.findOne(id);
		Room room = this.roomRepository.findOne(id);
		UserLogin financer = this.financerRepository.findOne(id);
		PatientSave patient = this.patientRepository.findOne(id);
        // this.billRepository.save(new CountBill(medicine, room, financer, patient));
		return "{\"status\":\"counted\"}";
	}
}