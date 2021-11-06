package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SaleSucessDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String seelerName;
	private Long visited;
	private Long deals; 
	
	public SaleSucessDTO() {
		
	}

	//public SaleSucessDTO(String seelerName, Long visited, Long deals) {
	//Novamente trocando STring por 
	public SaleSucessDTO(Seller  seeler, Long visited, Long deals) {
		this.seelerName = seeler.getName();
		this.visited = visited;
		this.deals = deals;
	}

	public String getSeelerName() {
		return seelerName;
	}

	public void setSeelerName(String seelerName) {
		this.seelerName = seelerName;
	}

	public Long getVisited() {
		return visited;
	}

	public void setVisited(Long visited) {
		this.visited = visited;
	}

	public Long getDeals() {
		return deals;
	}

	public void setDeals(Long deals) {
		this.deals = deals;
	}

	


	
}
