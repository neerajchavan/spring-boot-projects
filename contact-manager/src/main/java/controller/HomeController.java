package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.UserRepository;
import entities.User;

@Controller
public class HomeController {
    
	@Autowired
	private UserRepository userRepository;
	
    @RequestMapping("/test")
    @ResponseBody
    public String test(){
    	
        User user = new User();
        user.setAbout("description");
        user.setEmail("abc@gmail.com");
        userRepository.save(user);
        return "success test";
    }

}
