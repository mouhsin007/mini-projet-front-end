package com.smartecommerce.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.smartecommerce.db.ProduitRepository;
import com.smartecommerce.model.Produit;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "store/produit")
public class ProduitController {
	
	private byte[] bytes;

	@Autowired
	private ProduitRepository produitRepository;
	
	@GetMapping("/get")
	public List<Produit> getProduit() {
		return produitRepository.findAll();
	}
	
	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
	}

	@PostMapping("/add")
	public void createBook(@RequestBody Produit produit) throws IOException {
		produit.setPicbyte(this.bytes);
		produitRepository.save(produit);
		this.bytes = null;
	}
	
	@DeleteMapping(path = { "/delete/{id}" })
	public Produit deleteProduit(@PathVariable("id") long id) {
		Produit produit = produitRepository.getOne(id);
		produitRepository.deleteById(id);
		return produit;
	}
	
	
}