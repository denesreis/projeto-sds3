package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.services.SellerService;

@RestController
@RequestMapping(value = "/sellers") //Informa o caminho
public class SellerControler {
	@Autowired
	private SellerService service; //declarando uma instancia de SellerService
	
	@GetMapping
	//ResponseEntity = tipo de resposta
	public ResponseEntity<List<SellerDTO>> findAll(){
		
		List<SellerDTO> list = service.findAll();
		
		//.ok retorna a resposta 200 que no protocolo http indica que teve sucesso
		//e no corpo da resposta vai a lista
		return ResponseEntity.ok(list);
		
	}

}
