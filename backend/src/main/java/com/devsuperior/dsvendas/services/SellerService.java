package com.devsuperior.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	@Autowired //Para injetar automaticamente a instancia pelo frame work senão teria que ser declarado como ...
	//private SellerRepository repository = new SellerRepository() ....
	private SellerRepository repository;
	
	public List<SellerDTO> findAll(){		
		List<Seller> result = repository.findAll();	
		//Convertendo para uma lista de SellerDTO. 
		//map vai converter a coleção original para uma nova colecao
		//x -> new SellerDTO(x)) para cada x converte para SellerDTO passando x como argumento. Passa a entidade Seller e retorna SellerDTO
		//.collect(Collectors.toList() convertendo a string novamente para uma lista
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}
	
	
	
	

}
