import { Router } from 'express';
import ProdutoController from '../controller/produto.controller';
import appDataSource from '../infra/data-source';
import Produto from '../infra/entities/produto.entity';

export const produto = Router()

const controller = new ProdutoController(appDataSource.getRepository(Produto))

produto.post('/create', async (req, res) => {
    await controller.createProduto(req, res)
})

produto.get('/fetchall', async (req, res) => {
    await controller.fetchProdutos(req, res)
})

produto.get('/:produtoId/fetch', async (req, res) => {
    await controller.fetchProdutoById(req, res)
})

produto.put('/:produtoId/update', async (req, res) => {
    await controller.updateProduto(req, res)
})

produto.delete('/:produtoId/delete', async (req, res) => {
    await controller.deleteProduto(req, res)
})