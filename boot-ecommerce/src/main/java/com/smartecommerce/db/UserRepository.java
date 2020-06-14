package com.smartecommerce.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartecommerce.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	public User findByLogin(String email);
}