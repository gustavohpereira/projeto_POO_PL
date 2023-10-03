import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";

export default class AtualizarCliente{
    private pets: Array<Pet>
    private entrada: Entrada

    constructor(pets:Array<Pet>){
        this.pets = pets
        this.entrada = new Entrada()
    }

    public atualizar(){
        let nomeInput = this.entrada.receberTexto("digite o nome do pet a ser atualizado")
        for(let pet of this.pets){
            if (pet.getNome == nomeInput){
                // TODO: ATUALIZAR O pet QUE ACHOU(USAR INPUTS DO USUARIO)
                console.log(`--------------------------------------`)
                let opcao = this.entrada.receberNumero("o que deseja atualizar?\n 1- Nome\n 2- NomeSocial\n 3- ")

                switch (opcao){
                    case 1:
                        pet.nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
                        break

                    case 2:
                        pet.genero = this.entrada.receberTexto(`Por favor informe o genero do pet: `)
                        break

                    case 3:
                        pet.raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
                        break

                    case 4:
                        pet.tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
                        break
                }
                
                
                

            }
        }
    }

}