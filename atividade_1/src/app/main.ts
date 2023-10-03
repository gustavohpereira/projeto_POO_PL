import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import ListagemPets from "../negocio/ListagemPets";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import ListagemClientes from "../negocio/listagemClientes";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarPet from "../negocio/atualizarPet";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar Pet`)
    console.log(`--------------------------------------`)
    
    console.log(`3 - Listar todos os clientes`);
    console.log(`4 - Listar todos os Pets`);
    console.log(`--------------------------------------`)

    console.log(`5 - Atualizar Cliente`);
    console.log(`6 - Atualizar Pet`);
    console.log(`--------------------------------------`)
    console.log(`7 - Deletar CLientes`);
    console.log(`8 - Deletar Pets`);

    console.log(`0 - Sair`);

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

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}