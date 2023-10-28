import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import ListagemPets from "../negocio/CRUD pet/ListagemPets";
import CadastroCliente from "../negocio/CRUD cliente/cadastroCliente";
import CadastroPet from "../negocio/CRUD pet/cadastroPet";
import ListagemClientes from "../negocio/CRUD cliente/listagemClientes";
import AtualizarCliente from "../negocio/CRUD cliente/atualizarCliente";
import AtualizarPet from "../negocio/CRUD pet/atualizarPet";
import CadastroServico from "../negocio/CRUD Serviços/cadastro.servico";
import ListagemServicos from "../negocio/CRUD Serviços/listagemservico";
import ListagemProdutos from "../negocio/CRUD Produtos/listagemProduto";
import CadastroProduto from "../negocio/CRUD Produtos/cadastro.produtos";
import ListarProdutosComprados from "../negocio/CRUD cliente/listarProdutosComprados";
import ComprarProdutos from "../negocio/CRUD Produtos/comprarProduto";
import ComprarServico from "../negocio/CRUD Serviços/ComprarServico";
import ListarServicosComprados from "../negocio/CRUD cliente/listarProdutosComprados";
import listarRankConsumiveis from "../negocio/CRUD cliente/listarRankConsumiveis";
import rank_consumiveis_gerais from "../negocio/RankConsumiveisGerais";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar Pet`)
    console.log(`9 - Cadastrar serviços`);
    console.log(`11 - Cadastrar produtos`)
    console.log(`--------------------------------------`)
    
    console.log(`3 - Listar todos os clientes`);
    console.log(`4 - Listar todos os Pets`);
    console.log(`10 - listar todos os serviços`);
    console.log(`12 - listar todos os Produtos`);
    console.log(`14 - Listar produtos consumidos`);
    console.log(`15 - Listar serviços contratados`);
    console.log(`17 - ranking de quem mais consumiu(por quantidade)`);
    console.log(`18 - ranking de produtos e serviços mais consumidos`);
    console.log(`19 - ranking de quem mais consumiu(por valor)`);

    console.log(`--------------------------------------`)

    console.log(`5 - Atualizar Cliente`);
    console.log(`6 - Atualizar Pet`);
    console.log(`--------------------------------------`)
    console.log(`7 - Deletar CLientes`);
    console.log(`8 - Deletar Pets`);
    console.log(`--------------------------------------`)
    console.log(`13 - Comprar produtos`);
    console.log(`15 - Contratar Serviços`);

    console.log(`0 - Sair`);
    console.log(`\n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;

        case 2:

            let cadastropet = new CadastroPet(empresa.getClientes,empresa.getPets)
            cadastropet.cadastrar()
            break;


        case 3:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;

        case 4:
            let listagemPet = new ListagemPets(empresa.getPets)
            listagemPet.listar()
            break;

        case 5:
            let att = new AtualizarCliente(empresa.getClientes)
            att.atualizar()
            break

        case 6:
            let attPet = new AtualizarPet(empresa.getPets)
            attPet.atualizar()
            break
        
        case 7:
            empresa.deleteClientes()
            break

        case 8:
            empresa.deletePets()
            break

        case 9:
            let servico = new CadastroServico(empresa.getServicos)
            servico.cadastrar()
            break

        case 10:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break


        case 11:
            let produto = new CadastroProduto(empresa.getProdutos)
            produto.cadastrar()
            break

        case 12:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break

        case 13:
            let comprar_produtos = new ComprarProdutos(empresa.getClientes,empresa.getProdutos)
            comprar_produtos.comprar()
            break

        case 14:
            let listagemProdutosComprados = new ListarProdutosComprados(empresa.getClientes)
            listagemProdutosComprados.listar()
            break

        case 15:
            let servico_comprado = new ComprarServico(empresa.getClientes,empresa.getServicos)
            servico_comprado.comprar()
            break

        case 16:
            let listagemServicosComprados = new ListarServicosComprados(empresa.getClientes)
            listagemServicosComprados.listar()
            break

        case 17:
            let listagem_rank = new listarRankConsumiveis(empresa.getClientes)
            listagem_rank.listar()
            break

        case 18:
            let listage_rank_geral = new rank_consumiveis_gerais(empresa.getServicos,empresa.getProdutos)
            listage_rank_geral.listar()
            break

        
        case 19:
            let listage_rank_valor = new listarRankConsumiveis(empresa.getClientes)
            listage_rank_valor.listar_por_valor()
            break


        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}