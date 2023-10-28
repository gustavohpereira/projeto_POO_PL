export default class Produto {

    public nome!: string
    public cons_score!: number
    public valor!:number

    constructor(nome:string,valor:number){
        this.nome = nome
        this.cons_score = 0
        this.valor = valor
    }

    public add_score(){
        this.cons_score++
    }
}