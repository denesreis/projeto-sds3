package com.devsuperior.dsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSucessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	@Autowired //Para injetar automaticamente a instancia pelo frame work senão teria que ser declarado como ...
	//private SellerRepository repository = new SellerRepository() ....
	private SaleRepository repository;
	
	//para diminuir o numero de interações no banco de dados
	@Autowired
	private SellerRepository sellerrepository;
	
	//pageable para retornar uma pagina e não tudo
	//Iniciando uma transação somente leitura
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){	
		//para diminuir o numero de interações no banco de dados chama todos os vendedores e deixa na memória
		sellerrepository.findAll();
		Page<Sale> result = repository.findAll(pageable);	
		//Convertendo para uma lista de SellerDTO. 
		//map vai converter a coleção original para uma nova colecao
		//x -> new SellerDTO(x)) para cada x converte para SellerDTO passando x como argumento. Passa a entidade Seller e retorna SellerDTO
		//.collect(Collectors.toList() convertendo a string novamente para uma lista
		return result.map(x -> new SaleDTO(x));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller(){
		
		return repository.amountGroupedBySeller();
		
	}
	
	@Transactional(readOnly = true)
	public List<SaleSucessDTO> sucessGroupedBySeller(){
		
		return repository.sucessGroupedBySeller();
		
	}
	
	
	
	

}
