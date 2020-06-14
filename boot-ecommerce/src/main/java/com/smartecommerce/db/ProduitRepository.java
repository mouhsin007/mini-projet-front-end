package com.smartecommerce.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartecommerce.model.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
}