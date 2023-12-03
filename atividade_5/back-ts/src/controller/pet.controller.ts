import { Repository } from 'typeorm';
import Pet from '../infra/entities/pet.entity';
import { Request, Response } from 'express';

export default class PetsController {

    public constructor(
        private readonly petRepository: Repository<Pet>
    ) { }

    public async fetchPets(req: Request, res: Response) {
        try {
            await this.petRepository.find({
                relations: ["cliente.cpf"]
            })
            .then((pets) => {
                res.status(200).send(pets)
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }
}