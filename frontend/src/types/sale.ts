import { Seller } from "./seller"

export type  Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: Sale[]; //? indica que o parametro não é obrigatório quando for usado o tipo SalePage
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean
}    



export type SaleSum = {
    saleName: string;
    sum: number
}
//Boa pratica é pegar o resultado da request no postman
export type SaleSucess =     {
    seelerName: string;
    visited: number;
    deals: number
}
