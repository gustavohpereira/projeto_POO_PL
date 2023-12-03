import { Router } from 'express';
import appDataSource from '../infra/data-source';
import servicoController from '../controller/servico.controller';
import Servico from '../infra/entities/servico.entity';

export const servico = Router()

const controller = new servicoController(appDataSource.getRepository(Servico))

servico.post('/create', async (req, res) => {
    await controller.createServico(req, res)
})

servico.get('/fetchall', async (req, res) => {
    await controller.fetchServicos(req, res)
})

servico.get('/:servicoId/fetch', async (req, res) => {
    await controller.fetchServicoById(req, res)
})

servico.put('/:servicoId/update', async (req, res) => {
    await controller.updateServico(req, res)
})

servico.delete('/:servicoId/delete', async (req, res) => {
    await controller.deleteServico(req, res)
})