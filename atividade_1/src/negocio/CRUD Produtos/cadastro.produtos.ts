
import Entrada from "../../io/entrada"
import Cadastro from "../cadastro"
import Produto from "../../modelo/produto"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.entrada = new Entrada()
        this.produtos = produtos
    }
    public cadastrar(): void {

        
        console.log(`\nInício do cadastro de Produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Produto: `)
        let prod = new Produto(nome);
        this.produtos.push(prod)
    }
}