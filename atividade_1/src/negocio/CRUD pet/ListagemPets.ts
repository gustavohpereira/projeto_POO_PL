import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Listagem from "../listagem";

export default class ListagemPets extends Listagem {
    private pets: Array<Pet>
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
    }
    public listar(): void {
        console.log(`\nLista de todos os Pets:`);
        this.pets.forEach(pet => {
            console.log(`Nome: ` + pet.nome);
            console.log(`Genero: ` + pet.genero);
            console.log(`raça: ` + pet.getRaca);
            console.log(`Tipo: ` + pet.getTipo);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}