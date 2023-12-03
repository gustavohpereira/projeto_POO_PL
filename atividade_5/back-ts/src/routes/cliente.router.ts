import { Router } from 'express';
import ClienteController from '../controller/cliente.controller';
import appDataSource from '../infra/data-source';
import Cliente from '../infra/entities/cliente.entity';

export const cliente = Router()

const controller = new ClienteController(appDataSource.getRepository(Cliente))

cliente.post('/create', async (req, res) => {
    await controller.createCliente(req, res)
})

cliente.get('/fetchall', async (req, res) => {
    await controller.fetchClientes(req, res)
})

cliente.get('/:clienteId/fetch', async (req, res) => {
    await controller.fetchClienteById(req, res)
})
