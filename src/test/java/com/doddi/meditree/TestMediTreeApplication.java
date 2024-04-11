package com.doddi.meditree;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.TestConfiguration;

@TestConfiguration(proxyBeanMethods = false)
public class TestMediTreeApplication {

	public static void main(String[] args) {
		SpringApplication.from(MediTreeApplication::main).with(TestMediTreeApplication.class).run(args);
	}

}
