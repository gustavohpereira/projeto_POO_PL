import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import ListagemProdutos from "./listagemProduto";

export default class ComprarProdutos{
    private clientes: Array<Cliente>
    private entrada: Entrada
    private produtos: Array<Produto>

    constructor(clientes:Array<Cliente>,produtos:Array<Produto>){
        this.clientes = clientes
        this.entrada = new Entrada()
        this.produtos = produtos
    }

    public comprar(){

        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log("alow")
            console.log(`Nome: ` + produto.nome);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);

        console.log(`--------------------------------------`)
        let nome_produto = this.entrada.receberTexto("digite o nome do produto que quer comprar:")
        
        

        for(let produto of this.produtos){
            if(produto.nome == nome_produto){

                let cpfInput = this.entrada.receberTexto("produto localizado, agora digite o cpf do comprador")
                for(let cliente of this.clientes){
                    if (cliente.getCpf.getValor == cpfInput)
                        cliente.adicionarProduto(produto)
                    produto.add_score()
                    }
                }


            }
        }







       
    }




