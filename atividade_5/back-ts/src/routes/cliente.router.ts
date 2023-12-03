import { Router } from 'express';
import ClienteController from '../controller/cliente.controller';
import appDataSource from '../infra/data-source';
import Cliente from '../infra/entities/cliente.entity';

export const cliente = Router()

const controller = new ClienteController(appDataSource.getRepository(Cliente))

cliente.post('/create', async (req, res) => {
    await controller.createCliente(req, res)
})