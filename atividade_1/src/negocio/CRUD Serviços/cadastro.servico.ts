
import Entrada from "../../io/entrada"
import Cadastro from "../cadastro"
import Servico from "../../modelo/servico"

export default class CadastroServico extends Cadastro {
    private servs: Array<Servico>
    private entrada: Entrada
    constructor(serviços: Array<Servico>) {
        super()
        this.entrada = new Entrada()
        this.servs = serviços
    }
    public cadastrar(): void {

        
        console.log(`\nInício do cadastro de serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do serviço: `)
        let serv = new Servico(nome,valor);
        this.servs.push(serv)
    }
}