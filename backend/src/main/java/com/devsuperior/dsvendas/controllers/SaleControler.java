package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSucessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.services.SaleService;

@RestController
@RequestMapping(value = "/sales") //Informa o caminho
public class SaleControler {
	@Autowired
	private SaleService service; 
	
	@GetMapping
	//ResponseEntity = tipo de resposta
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
		
		Page<SaleDTO> list = service.findAll(pageable);
		
		//.ok retorna a resposta 200 que no protocolo http indica que teve sucesso
		//e no corpo da resposta vai a lista
		return ResponseEntity.ok(list);
		
	}
	
	@GetMapping(value = "amount-by-seller") //para diferencia do primeiro getmapping
	public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller(){
		
		List<SaleSumDTO> list = service.amountGroupedBySeller();
		

		return ResponseEntity.ok(list);
		
	}
	
	@GetMapping(value = "sucess-by-seller") //para diferencia do primeiro getmapping
	public ResponseEntity<List<SaleSucessDTO>> sucessGroupedBySeller(){
		
		List<SaleSucessDTO> list = service.sucessGroupedBySeller();
		

		return ResponseEntity.ok(list);
		
	}

}
