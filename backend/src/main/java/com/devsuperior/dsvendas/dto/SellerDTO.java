package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;
//Implementando a classe DTO como Serializable. Garantir que os objetos DTO possam ser convertidos para byte pra poder travegar em rede e ser salvo em arquivos
public class SellerDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	SellerDTO(){
		
	}

	public SellerDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	//Criando um construtor que possa receber uma diretamente uma entidade
	public SellerDTO(Seller entity) {
		id = entity.getId();
		name = entity.getName();
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
	

}
