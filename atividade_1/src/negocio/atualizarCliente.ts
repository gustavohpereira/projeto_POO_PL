import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class AtualizarCliente{
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
                console.log(cliente)

                // TODO: ATUALIZAR O CLIENTE QUE ACHOU(USAR INPUTS DO USUARIO)
            }
        }
    }

}