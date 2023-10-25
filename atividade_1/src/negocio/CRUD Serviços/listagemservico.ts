
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servico: Array<Servico>) {
        super()
        this.servicos = servico
    }
    public listar(): void {
        console.log(`\nLista de todos os Serviços:`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}