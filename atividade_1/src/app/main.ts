import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import ListagemPets from "../negocio/ListagemPets";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import ListagemClientes from "../negocio/listagemClientes";
import AtualizarCliente from "../negocio/AtualizarCliente";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar Pets`);
    console.log(`4 - Listar todos os Pets`);
    console.log(`5 - Deletar CLientes`);
    console.log(`6 - Atualizar Cliente`);

    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;

        case 3:

            let cadastropet = new CadastroPet(empresa.getClientes,empresa.getPets)
            cadastropet.cadastrar()
            break;

        case 4:
            let listagemPet = new ListagemPets(empresa.getPets)
            listagemPet.listar()
            break;

        case 5:
            empresa.deleteClientes()
            break
        
        case 6:
            let att = new AtualizarCliente(empresa.getClientes)
            att.atualizar()
            break
        
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}