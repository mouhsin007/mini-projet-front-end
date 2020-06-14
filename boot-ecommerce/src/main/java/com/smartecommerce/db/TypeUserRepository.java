package com.smartecommerce.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartecommerce.model.TypeUser;

@Repository
public interface TypeUserRepository extends JpaRepository<TypeUser, Long> {
	public TypeUser findByLibelle(String libelle);

}
