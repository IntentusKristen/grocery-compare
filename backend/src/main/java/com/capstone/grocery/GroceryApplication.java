package com.capstone.grocery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.capstone.grocery.model")
public class GroceryApplication {

	public static void main(String[] args) {
		SpringApplication.run(GroceryApplication.class, args);
	}

}
