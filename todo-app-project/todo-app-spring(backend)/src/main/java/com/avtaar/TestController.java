package com.avtaar;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {
	
	@GetMapping("/hello-world")
	public String test() {
		return "Hello World, You are going good!";
    }
    
    @GetMapping("/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World Bean");
	}

}
