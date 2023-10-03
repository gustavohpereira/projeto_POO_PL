import Entrada from "../io/entrada"
import ListagemClientes from "../negocio/listagemClientes"
import Cliente from "./cliente"
import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private pets: Array<Pet>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.pets = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }

    public get getPets(){
        return this.pets
    }

    public deleteClientes():void{
        let entrada = new Entrada()
        let valor = entrada.receberTexto("digite o cpf que você queira deletar");
        
        const pessoasFiltradas = this.clientes.filter((cliente) => cliente.getCpf.getValor !== valor);
        this.clientes = pessoasFiltradas
        
    }

    public deletePets():void{
        let entrada = new Entrada()
        let valor = entrada.receberTexto("digite o nome do pet que você queira deletar");
        
        const pets_filtrados = this.pets.filter((pet) => pet.nome !== valor);
        this.pets = pets_filtrados
        
    }
}