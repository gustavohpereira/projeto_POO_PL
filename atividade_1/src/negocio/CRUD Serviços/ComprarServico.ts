import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";


export default class ComprarProdutos{
    private clientes: Array<Cliente>
    private entrada: Entrada
    private servicos: Array<Servico>

    constructor(clientes:Array<Cliente>,servicos:Array<Servico>){
        this.clientes = clientes
        this.entrada = new Entrada()
        this.servicos = servicos
    }

    public comprar(){

        console.log(`\nLista de todos os servicos:`);
        this.servicos.forEach(produto => {
            console.log("alow")
            console.log(`Nome: ` + produto.nome);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);

        console.log(`--------------------------------------`)
        let nome_servicos = this.entrada.receberTexto("digite o nome do serviço que quer comprar:")
        
        

        for(let servico of this.servicos){
            if(servico.nome == nome_servicos){

                let cpfInput = this.entrada.receberTexto("servico localizado, agora digite o cpf do comprador")
                for(let cliente of this.clientes){
                    if (cliente.getCpf.getValor == cpfInput)
                        cliente.adicionarservico(servico)
                        servico.add_score()
                    }
                }


            }
        }

       
    }




