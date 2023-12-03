import { Router } from 'express';
import PetsController from '../controller/pet.controller';
import appDataSource from '../infra/data-source';
import Pet from '../infra/entities/pet.entity';

export const pet = Router()

const controller = new PetsController(appDataSource.getRepository(Pet))

pet.get("/fetchall", async (req, res) => {
    await controller.fetchPets(req, res)
})