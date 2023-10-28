import Cliente from "../../modelo/cliente";

export default class rank_consumiveis{
    public client_list: Array<Cliente>

    constructor(clients:Array<Cliente>){
        this.client_list = clients
    }


    private calcularPontuacao(cliente: Cliente): number {
        const pontuacaoServicos = cliente.getServicosConsumidos.length;
        const pontuacaoProdutos = cliente.getProdutosConsumidos.length;
        return pontuacaoServicos + pontuacaoProdutos;
      }

    private calcularPontuacao_valor(cliente: Cliente): number {
        let pontuacao = 0;

        // Somar os valores dos serviços
        for (const servico of cliente.getServicosConsumidos) {
        pontuacao += servico.valor;
        }

        // Somar os valores dos produtos
        for (const produto of cliente.getProdutosConsumidos) {
        pontuacao += produto.valor;
        }

        return pontuacao;
    }

    public listar(){
        const listaDeClientesClassificada = this.client_list.sort((a, b) => {
            const pontuacaoA = this.calcularPontuacao(a);
            const pontuacaoB = this.calcularPontuacao(b);
            return pontuacaoB - pontuacaoA; // Classifique em ordem decrescente
          });

        let contador = 1
        for (let client of listaDeClientesClassificada){
            console.log(`${contador} --- ${client.nome} --- pontuação: ${client.getServicosConsumidos.length + client.getProdutosConsumidos.length}` )
            contador = contador + 1

        }
        console.log(`--------------------------------------`)
        console.log(`\n`);
    }

    public listar_por_valor(){
        const listaDeClientesClassificada = this.client_list.sort((a, b) => {
            const pontuacaoA = this.calcularPontuacao_valor(a);
            const pontuacaoB = this.calcularPontuacao_valor(b);
            return pontuacaoB - pontuacaoA; // Classifique em ordem decrescente
          });

        let contador = 1
        for (let client of listaDeClientesClassificada){
            console.log(`${contador} --- ${client.nome}` )
            contador = contador + 1

        }
        console.log(`--------------------------------------`)
        console.log(`\n`);
    }
}