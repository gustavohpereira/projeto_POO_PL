import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class AtualizarPet{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes:Array<Cliente>){
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(){
        let cpfInput = this.entrada.receberTexto("digite o cpf do cliente a ser atualizado")
        for(let cliente of this.clientes){
            if (cliente.getCpf.getValor == cpfInput){
                // TODO: ATUALIZAR O CLIENTE QUE ACHOU(USAR INPUTS DO USUARIO)
                console.log(`--------------------------------------`)
                let opcao = this.entrada.receberNumero("o que deseja atualizar?\n 1- Nome\n 2- NomeSocial")

                switch (opcao){
                    case 1:
                        cliente.nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
                        break

                    case 2:
                        cliente.nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
                        break

                }
                
                
                

            }
        }
    }

}