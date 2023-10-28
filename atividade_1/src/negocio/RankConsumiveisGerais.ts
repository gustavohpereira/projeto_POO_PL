import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class rank_consumiveis_gerais{
    public service_list: Array<Servico>
    product_list: Produto[];

    constructor(servicos:Array<Servico>,produtos:Array<Produto>){
        this.service_list = servicos
        this.product_list = produtos
    }




    public listar(){

        let generic_list = this.service_list.concat(this.product_list)
        const listaDeConsumiveisClassificada = generic_list.sort((a, b) => {
            const pontuacaoA = a.cons_score;
            const pontuacaoB = b.cons_score;
            return pontuacaoB - pontuacaoA; // Classifique em ordem decrescente
          });

        let contador = 1
        for (let consumivel of listaDeConsumiveisClassificada){
            console.log(`${contador} --- ${consumivel.nome} -- pontuação: ${consumivel.cons_score}` )
            contador = contador + 1
        }
        console.log(`--------------------------------------`)
        console.log(`\n`);
    }
}