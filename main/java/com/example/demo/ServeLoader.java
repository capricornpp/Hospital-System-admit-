package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ServeLoader implements CommandLineRunner {
	
	@Autowired private ServeDishRepository serveDishRepository;
	@Autowired private ServeDrinkRepository serveDrinkRepository;
	@Autowired private ServeDessertRepository serveDessertRepository;
	// @Autowired private ServeMenuRepository serveMenuRepository;
	@Autowired private UserLoginRepository userLoginRepository;
	@Autowired private PatientSaveRepository patientSaveRepository;
    
	@Override
	public void run(String... strings) throws Exception {
		
		this.serveDishRepository.save(new ServeDish("Chicken Galangal Soup"));
		this.serveDishRepository.save(new ServeDish("Boiled Vegetable Soup"));
		this.serveDishRepository.save(new ServeDish("Seafood Curry in Coconut"));

		this.serveDrinkRepository.save(new ServeDrink("Iced White Chocolate Mocha"));
		this.serveDrinkRepository.save(new ServeDrink("Organic Whole Milk"));
		this.serveDrinkRepository.save(new ServeDrink("Martini"));

		this.serveDessertRepository.save(new ServeDessert("Poppyseed Cake With Passion-fruit Curd"));
		this.serveDessertRepository.save(new ServeDessert("Butterfinger Cookie Dough Cheesecake Bars"));
		this.serveDessertRepository.save(new ServeDessert("Chocolate And Orange Cookies With Cream Cheese Filling"));

		this.userLoginRepository.save(new UserLogin("a", "", "Tony", "Stark", "5414057666734", "nutritionist"));
		this.userLoginRepository.save(new UserLogin("b", "", "Steve", "Rogers", "8705705824334", "nutritionist"));
		this.userLoginRepository.save(new UserLogin("c", "", "Wanda", "Maximoff", "2753275118625", "nutritionist"));

		this.patientSaveRepository.save(new PatientSave("Akane", "Tsunemori", "Milk"));
		this.patientSaveRepository.save(new PatientSave("Sakuya", "Tougane", "Shrimp"));
		this.patientSaveRepository.save(new PatientSave("Jouji", "Saiga", "Banana"));
	}
}