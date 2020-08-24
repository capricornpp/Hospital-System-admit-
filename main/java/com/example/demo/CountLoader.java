package com.example.demo;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CountLoader implements CommandLineRunner {

	@Autowired CountBillRepository billRepository;
	@Autowired PharmacyListRepository medicineRepository;
	@Autowired PharmacyLetterRepository medicineFromRepository;
	@Autowired RoomRepository roomRepository;
	@Autowired SaveRoomRepository roomFormRepository;

	@Autowired UserLoginRepository financerRepository;
	@Autowired PatientSaveRepository patientRepository;

	@Override
	public void run(String... strings) throws Exception {
		this.medicineRepository.save(new PharmacyList("Biseptol", 1));
		this.medicineRepository.save(new PharmacyList("Navidoxine", 2));
		this.medicineRepository.save(new PharmacyList("Terramicina Oftalmica", 3));
	}
}