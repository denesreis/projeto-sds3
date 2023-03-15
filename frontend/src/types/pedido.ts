export type PedidoPaginado = {
    content?: PedidoExpedicao[]; //? indica que o parametro não é obrigatório quando for usado o tipo SalePage
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean
}    

export type PedidoExpedicao = {
    nome: string,
    embalado: number,
    volume: number,
    pesoLiquido: number
}
