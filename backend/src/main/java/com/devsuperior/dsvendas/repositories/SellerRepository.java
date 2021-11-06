package com.devsuperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsvendas.entities.Seller;
//IMPORTANTE. Observe que é uma interface e não classe
public interface SellerRepository extends JpaRepository<Seller, Long>{
	
}
