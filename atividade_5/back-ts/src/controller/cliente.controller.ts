import { Repository } from 'typeorm';
import Cliente from '../infra/entities/cliente.entity';
import { Request, Response } from 'express';

export default class ClienteController {

    public constructor(
        private readonly clienteRepository: Repository<Cliente>
    ) { }

    public async createCliente(req: Request, res: Response) {
        const { nome, nomeSocial, cpf, rgs, telefones } = req.body
        if (nome == null || nomeSocial == null || cpf == null || rgs == null || telefones == null) return res.status(400).send({ message: "Missing client data" })
        try {
            await this.clienteRepository.save(req.body).then((cliente) => {
                return res.status(201).send(cliente)
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async fetchClientes(req: Request, res: Response) {
        try {
            await this.clienteRepository.find().then((clientes) => {
                return res.status(200).send(clientes)
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async fetchClienteById(req: Request, res: Response) {
        try {
            await this.clienteRepository.findOne({
                where: {
                    id: Number(req.params.clienteId)
                },
                relations: {
                    telefones: true,
                    produtosConsumidos: true,
                    servicosConsumidos: true,
                    pets: true
                }
            })
                .then((cliente) => {
                    if (!cliente) {
                        res.status(404).send({ message: "Client not found" })
                    } else {
                        res.status(200).send(cliente)
                    }
                })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async updateCliente(req: Request, res: Response) {
        if (Object.keys(req.body).length === 0) return res.sendStatus(400)
        try {
            await this.clienteRepository.findOne({
                where: {
                    id: Number(req.params.clienteId)
                },
                relations: {
                    telefones: true,
                    produtosConsumidos: true,
                    servicosConsumidos: true,
                    pets: true
                }
            })
                .then(async (cliente) => {
                    if (!cliente) {
                        res.status(404).send({ message: "Client not found" })
                    } else {
                        await this.clienteRepository.save({ ...cliente, ...req.body }).then((cliente) => {
                            res.status(200).send(cliente)
                        })
                    }
                })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    public async deleteClienteById(req: Request, res: Response) {
        try {
            await this.clienteRepository.delete(Number(req.params.clienteId)).then(() => {
                return res.status(200).send({ message: "Client deleted succesfully" })
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

}