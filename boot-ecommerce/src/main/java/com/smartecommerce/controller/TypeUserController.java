package com.smartecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartecommerce.db.TypeUserRepository;
import com.smartecommerce.model.TypeUser;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "store/type-user")
public class TypeUserController {
	@Autowired
	TypeUserRepository typeUserRepository;
	@GetMapping("get")
	public List<TypeUser> getTypeUser(){
	return	typeUserRepository.findAll();
	}
}
