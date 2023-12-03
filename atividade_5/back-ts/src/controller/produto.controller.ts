import { Repository } from 'typeorm';
import Produto from '../infra/entities/produto.entity';
import { Request, Response } from 'express';

export default class ProdutoController {

    public constructor(
        private readonly produtoRepository: Repository<Produto>
    ) { }

    public async createProduto(req: Request, res: Response) {
        const { nome } = req.body
        if (nome == null) return res.status(400).send({ message: "Missing product data" })
        try {
            await this.produtoRepository.save(req.body).then((produto) => {
                return res.status(201).send(produto)
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async fetchProdutos(req: Request, res: Response) {
        try {
            await this.produtoRepository.find().then((produtos) => {
                return res.status(200).send(produtos)
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async fetchProdutoById(req: Request, res: Response) {
        try {
            await this.produtoRepository.findOne({
                where: {
                    id: Number(req.params.produtoId)
                }
            })
                .then((produto) => {
                    if (!produto) {
                        res.status(404).send({ message: "Product not found" })
                    } else {
                        res.status(200).send(produto)
                    }
                })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async updateProduto(req: Request, res: Response) {
        if (Object.keys(req.body).length === 0) return res.sendStatus(400)
        try {
            await this.produtoRepository.findOne({
                where: {
                    id: Number(req.params.produtoId)
                }
            })
                .then(async (produto) => {
                    if (!produto) {
                        res.status(404).send({ message: "" })
                    } else {
                        await this.produtoRepository.save({ ...produto, ...req.body }).then((cliente) => {
                            res.status(200).send(cliente)
                        })
                    }
                })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async deleteProduto(req: Request, res: Response) {
        try {
            await this.produtoRepository.delete(Number(req.params.produtoId)).then(() => {
                return res.status(200).send({ message: "Product deleted succesfully" })
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }
}