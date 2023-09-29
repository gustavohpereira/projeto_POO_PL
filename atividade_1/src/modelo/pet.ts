export default class Pet {
    public nome: string
    public tipo: string
    public raca: string
    public genero: string
    public cpf_dono: String

    constructor(nome: string, raca: string, genero: string, tipo: string,cpf_dono:string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.cpf_dono = cpf_dono
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
}