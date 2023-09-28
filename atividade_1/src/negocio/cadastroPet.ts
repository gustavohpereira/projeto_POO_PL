import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Pet from "../modelo/pet"
import Cadastro from "./cadastro"

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>,pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.pets = pets

    }
    public cadastrar(): void {

        
        console.log(`\nInício do cadastro do pet`);
        console.log(this.clientes)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do cachorro`)
        let genero = this.entrada.receberTexto(`Por favor informe o genero do pet: `);
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet`);
        let nome_dono = this.entrada.receberTexto(`Por favor informe o cpf do dono`);

        let pet = new Pet(nome,raca,genero,tipo);
        this.pets.push(pet)



    }
}