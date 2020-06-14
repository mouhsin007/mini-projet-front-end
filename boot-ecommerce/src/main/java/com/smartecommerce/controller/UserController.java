package com.smartecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartecommerce.db.TypeUserRepository;
import com.smartecommerce.db.UserRepository;
import com.smartecommerce.model.TypeUser;
import com.smartecommerce.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "store/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private TypeUserRepository typeUserRepository;
	
	@GetMapping("/get")
	public List<User> getUsers() {
		return userRepository.findAll();
	}
	
	@PostMapping("/libelle/{libelle}")
	public void createUser(@PathVariable String libelle,@RequestBody User user) {
		TypeUser typeus=typeUserRepository.findByLibelle(libelle);
		System.out.println(typeus);
		User newUser= new User();
		newUser.setTypeUser(typeus);
		newUser.setLogin(user.getLogin());
		newUser.setPassword(user.getPassword());
		newUser.setBlocked(false);
		newUser.setNombreTentative(3);
		
		userRepository.save(newUser);
	}
	@GetMapping("/email/{email}/password/{password}")
	public int connecter(@PathVariable String email,@PathVariable String password) {
		User user=userRepository.findByLogin(email);
		System.out.println(user);
		if (user==null)
			return -1;
		else if (user.isBlocked())
			return -2;
		else if (!user.getPassword().equals(password)) {
			if(user.getNombreTentative()==0) {
				user.setBlocked(true);
				userRepository.save(user);
			}
			user.setNombreTentative(user.getNombreTentative()-1);
			userRepository.save(user);
			return -3;
			}
		else {
			user.setNombreTentative(3);
			userRepository.save(user);
			return 1;
		}
	}
	
	
	@DeleteMapping(path = { "/{id}" })
	public User deleteUser(@PathVariable("id") long id) {
		User user = userRepository.getOne(id);
		userRepository.deleteById(id);
		return user;
	}

}