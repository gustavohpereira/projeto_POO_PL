import { Repository } from 'typeorm';
import servico from '../infra/entities/servico.entity';
import { Request, Response } from 'express';

export default class ServicoController {

    public constructor(
        private readonly servicoRepository: Repository<servico>
    ) { }

    public async createServico(req: Request, res: Response) {
        const { nome } = req.body
        if (nome == null) return res.status(400).send({ message: "Missing service data" })
        try {
            await this.servicoRepository.save(req.body).then((servico) => {
                return res.status(201).send(servico)
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async fetchServicos(req: Request, res: Response) {
        try {
            await this.servicoRepository.find().then((servicos) => {
                return res.status(200).send(servicos)
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async fetchServicoById(req: Request, res: Response) {
        try {
            await this.servicoRepository.findOne({
                where: {
                    id: Number(req.params.servicoId)
                }
            })
                .then((servico) => {
                    if (!servico) {
                        res.status(404).send({ message: "Service not found" })
                    } else {
                        res.status(200).send(servico)
                    }
                })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async updateServico(req: Request, res: Response) {
        if (Object.keys(req.body).length === 0) return res.sendStatus(400)
        try {
            await this.servicoRepository.findOne({
                where: {
                    id: Number(req.params.servicoId)
                }
            })
                .then(async (servico) => {
                    if (!servico) {
                        res.status(404).send({ message: "" })
                    } else {
                        await this.servicoRepository.save({ ...servico, ...req.body }).then((cliente) => {
                            res.status(200).send(cliente)
                        })
                    }
                })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async deleteServico(req: Request, res: Response) {
        try {
            await this.servicoRepository.delete(Number(req.params.servicoId)).then(() => {
                return res.status(200).send({ message: "Service deleted succesfully" })
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }
}