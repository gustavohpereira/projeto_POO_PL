import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import ListagemProdutos from "../CRUD Produtos/listagemProduto";


export default class ListarProdutosComprados{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes:Array<Cliente>){
        this.clientes = clientes
        this.entrada = new Entrada()

    }

    public listar (){

        
        let cpfInput = this.entrada.receberTexto("digite o cpf do usuario")
        for(let cliente of this.clientes){
            if (cliente.getCpf.getValor == cpfInput){
                let produtos_consumidos = cliente.getProdutosConsumidos
                let listagem = new ListagemProdutos(produtos_consumidos)
                listagem.listar()
            }
        }

    }

}
