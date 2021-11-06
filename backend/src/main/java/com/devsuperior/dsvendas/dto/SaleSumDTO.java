package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SaleSumDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String saleName;
	private double sum;
	
	public SaleSumDTO() {
		
	}
	//Foi feito a mudança porque na hora de agrupar os dados na consulta não funciona no postman
	//public SaleSumDTO(String saleName, double sum) {
	public SaleSumDTO(Seller seller, double sum) {
		this.saleName = seller.getName();
		this.sum = sum;
	}
	public String getSaleName() {
		return saleName;
	}
	public void setSaleName(String saleName) {
		this.saleName = saleName;
	}
	public double getSum() {
		return sum;
	}
	public void setSum(double sum) {
		this.sum = sum;
	}

	
}
