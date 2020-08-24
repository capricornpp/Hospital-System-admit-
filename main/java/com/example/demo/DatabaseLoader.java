package com.example.demo;

import java.util.Set;
import java.util.HashSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.example.demo.PatientAppoinmentLatter;
import org.springframework.stereotype.Controller;

//Pak
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
@Component

public class DatabaseLoader implements CommandLineRunner {
	private final UserLoginRepository userLoginRepository;

	private PatientSaveRepository patientSaveRepository;
	//	@Autowired PatientRepository patientRepository;
	@Autowired
	private RoomRepository  roomRepository;
	@Autowired
	private NurseRepository nurseRepository;

	private PatientRepository repository;
	private PatientAppoinmentLatterRepository paRepository;

	@Autowired
	private DiagnoseRepository diagnoseRepository;



	@Autowired
	public DatabaseLoader(NurseRepository nurseRepository,
						  UserLoginRepository userLoginRepository, PatientSaveRepository patientSaveRepository, RoomRepository roomRepository,PatientRepository repository, PatientAppoinmentLatterRepository paRepository){
		this.userLoginRepository = userLoginRepository;
		this.patientSaveRepository = patientSaveRepository;
		this.roomRepository = roomRepository;
		this.repository = repository;
		this.paRepository = paRepository;
		this.nurseRepository = nurseRepository;
	}
	@Override
	public void run(String... strings) throws Exception {

		UserLogin userLogin = new UserLogin("tewich","1","Tewich","Promkong","1409901527796","Nurse");
		this.userLoginRepository.save(userLogin);
		UserLogin userLogin1 = new UserLogin("doctor","1234","janyutthana","wiruswa","1234567891234","Doctor");
		this.userLoginRepository.save(userLogin1);

		UserLogin userLogin2 = new UserLogin("oreo","oreo","hideki","hiroshi","1234567891234","Employee");
		this.userLoginRepository.save(userLogin2);
		UserLogin userLogin3 = new UserLogin("Financier","1","Guy","Promkong","1234567891234","Financier");
		this.userLoginRepository.save(userLogin3);
		UserLogin userLogin4 = new UserLogin("boss","1","Mom"," Promkong","1234567891234","หัวหน้าแผนก");
		this.userLoginRepository.save(userLogin4);
		UserLogin userLogin5 = new UserLogin("food","1","Dad"," Promkong","1234567891234","นักโภชนาการ");
		this.userLoginRepository.save(userLogin5);



		PatientSave patienthistory = new PatientSave("tewich","Promkong","1409901525547","20","174","49","B","119",
				"Doctor","โสด","0934430113","Broken arm","แพ้อาหารรสจัด",userLogin);
		PatientSave patienthistory1 = new PatientSave("Phakphum"," Phinyodom","1709800272311","20","174","49","O","119",
				"Gamer","โสด","0898616466","Broken leg","แพ้อาหารรสจืด",userLogin1);
		PatientSave patienthistory2 = new PatientSave("เก่ง"," ใฝ่เรียนรู้","1109010272332","20","174","49","O","119",
				"Gamer","แต่งงานแล้ว","0898616455","Sick","แพ้อาหารรสหวาน",userLogin2);
		this.patientSaveRepository.save(patienthistory);
		this.patientSaveRepository.save(patienthistory1);
		this.patientSaveRepository.save(patienthistory2);

		// phakphum
		DateFormat newdate = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		Date d1 = newdate.parse("26-02-2018 11:55:11");
		Date d2 = newdate.parse("01-01-2018 22:55:22");
		// Date d3 = newdate.parse("28-02-2018 33:55:33");

		Diagnose dn1 = new Diagnose(d1, "ตรวจเลือด1", "orange","ตรวจน้ำไขสันหลัง1","ตรวจเชื้อ1","ตรวจเพาะเชื้อ1", "x-sray1", "UltraSound1", "mri1","ตัดชิ้นเนื้อตรวจ1","ตรวจศพ1",patienthistory,userLogin1,"คนไข้01","แพทย์01" );
		Diagnose dn2 = new Diagnose(d2, "ตรวจเลือด2", "orange","ตรวจน้ำไขสันหลัง2","ตรวจเชื้อ2","ตรวจเพาะเชื้อ2", "x-sray2", "UltraSound2", "mri2","ตัดชิ้นเนื้อตรวจ2","ตรวจศพ2",patienthistory1,userLogin2,"คนไข้02","แพทย์02" );
		this.diagnoseRepository.save(dn1);
		this.diagnoseRepository.save(dn2);

		Room m1 = new Room("รวมชาย","1","เตียงธรรมดา",300);
		Room m2 = new Room("รวมชาย","2","เตียงธรรมดา",300);
		Room m3 = new Room("รวมชาย","3","เตียงไฟฟ้า",300);
		Room m4 = new Room("รวมชาย","4","เตียงไฟฟ้า",300);
		Room m5 = new Room("รวมชาย","5","เตียงธรรมดา",300);
		Room m6 = new Room("รวมชาย","6","เตียงไฟฟ้า",300);
		Room m7 = new Room("รวมชาย","7","เตียงไฟฟ้า",300);
		Room m8 = new Room("รวมชาย","8","เตียงธรรมดา",300);

		Room f1 = new Room("รวมหญิง","1","เตียงธรรมดา",300);
		Room f2 = new Room("รวมหญิง","2","เตียงธรรมดา",300);
		Room f3 = new Room("รวมหญิง","3","เตียงไฟฟ้า",300);
		Room f4 = new Room("รวมหญิง","4","เตียงไฟฟ้า",300);
		Room f5 = new Room("รวมหญิง","5","เตียงธรรมดา",300);
		Room f6 = new Room("รวมหญิง","6","เตียงไฟฟ้า",300);
		Room f7 = new Room("รวมหญิง","7","เตียงไฟฟ้า",300);
		Room f8 = new Room("รวมหญิง","8","เตียงธรรมดา",300);

		Room s1 = new Room("ห้องพิเศษ","1","เตียงไฟฟ้า",4000);
		Room s2 = new Room("ห้องพิเศษ","2","เตียงไฟฟ้า",4000);
		Room s3 = new Room("ห้องพิเศษ","3","เตียงไฟฟ้า",4000);
		Room s4 = new Room("ห้องพิเศษ","4","เตียงไฟฟ้า",4000);
		Room s5 = new Room("ห้องพิเศษ","5","เตียงไฟฟ้า",4000);
		Room s6 = new Room("ห้องพิเศษ","6","เตียงไฟฟ้า",4000);
		Room s7 = new Room("ห้องพิเศษ","7","เตียงไฟฟ้า",4000);
		Room s8 = new Room("ห้องพิเศษ","8","เตียงไฟฟ้า",4000);
		this.roomRepository.save(m1);
		this.roomRepository.save(m2);
		this.roomRepository.save(m3);
		this.roomRepository.save(m4);
		this.roomRepository.save(m5);
		this.roomRepository.save(m6);
		this.roomRepository.save(m7);
		this.roomRepository.save(m8);

		this.roomRepository.save(f1);
		this.roomRepository.save(f2);
		this.roomRepository.save(f3);
		this.roomRepository.save(f4);
		this.roomRepository.save(f5);
		this.roomRepository.save(f6);
		this.roomRepository.save(f7);
		this.roomRepository.save(f8);

		this.roomRepository.save(s1);
		this.roomRepository.save(s2);
		this.roomRepository.save(s3);
		this.roomRepository.save(s4);
		this.roomRepository.save(s5);
		this.roomRepository.save(s6);
		this.roomRepository.save(s7);
		this.roomRepository.save(s8);

		Set<PatientAppoinmentLatter>emptySet = new HashSet<PatientAppoinmentLatter>();
		Set<PatientAppoinmentLatter>baiNut = new HashSet<PatientAppoinmentLatter>();
		PatientAppoinmentLatter p = new PatientAppoinmentLatter("หมอสมชาย","ยอดมวยไทย","ทันตกรรม","11/12/2012","00:00","อุดฟันบน","1234");
		this.paRepository.save(p);
		baiNut.add(p);

		this.repository.save(new Patient("นายสมปอง", "พองพอดี", "11/11/2011",22,"O","Thai",baiNut));
		this.repository.save(new Patient("นายสมิง", "รักดี", "11/11/2071",24,"A","Thai",emptySet));
		this.repository.save(new Patient("นางบางบัว", "บางวัน", "11/11/2061",32,"B","Thai",emptySet));
		this.repository.save(new Patient("นางเสวย", "อิ่มทิพ", "11/11/2031",52,"AB","Thai",emptySet));
		this.repository.save(new Patient("นายเทพ", "หัดบิน", "11/11/2021",18,"O","Thai",emptySet));


		Nurse n1 = new Nurse("นายสมปอง","อิ่มทิพ","ward");
		this.nurseRepository.save(n1);
		Nurse n2 = new Nurse("นายสมิง","รักดี","ward");
		this.nurseRepository.save(n2);
		Nurse n3 = new Nurse("นางเสวย","พองพอดี","ward");
		this.nurseRepository.save(n3);
	}
}
