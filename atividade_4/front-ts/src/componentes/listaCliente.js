/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListaCliente(props) {
    
    const [clients, setClients] = useState([])

    const fetchClients = async () => {
        await axios.get("http://localhost:32831/cliente/clientes", {
            validateStatus: function(status) {
                return true
            }
        }).then((response) => {
            const data = response.data
            setClients(data)
        })
    }

    useEffect(() => {
        fetchClients()
    }, [])

    const [clienteSelecionado, setClienteSelecionado] = useState(null)

    console.log(clienteSelecionado);

    const handleVisualizar = (client) => {
        setClienteSelecionado(client);
    };
    
      const handleVoltar = () => {
        setClienteSelecionado(null);
    };

    return (
        <div>
            {clienteSelecionado ? (
                <VisualizarCliente client={clienteSelecionado} handleVoltar={handleVoltar} />
            ): (
                <TabelaClientes onVisualizar={handleVisualizar} clients={clients} />
            )}
        </div>
    );
}

export function TabelaClientes(props) {
    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Nome Social</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.clients.map((client, index) => (
                        <tr key={index} style={{ backgroundColor: props.tema }}>
                            <td>{client.nome}</td>
                            <td>{client.nomeSocial}</td>
                            <td>
                                <button onClick={() => props.onVisualizar(client)}>Visualizar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function VisualizarCliente(props) {
    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Nome Social</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ backgroundColor: props.tema }}>
                        <td>{props.client.nome}</td>
                        <td>{props.client.nomeSocial}</td>
                        <td>{props.client.email}</td>
                        <td>({props.client.telefones[0].ddd}) {props.client.telefones[0].numero}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th scope="col">Estado</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Bairro</th>
                        <th scope="col">Rua</th>
                        <th scope="col">Número</th>
                        <th scope="col">Código Postal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.client.endereco.estado}</td>
                        <td>{props.client.endereco.cidade}</td>
                        <td>{props.client.endereco.bairro}</td>
                        <td>{props.client.endereco.rua}</td>
                        <td>{props.client.endereco.numero}</td>
                        <td>{props.client.endereco.codigoPostal}</td>
                        
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th scope="col">Informações Adicionais</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.client.endereco.informacoesAdicionais}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={props.handleVoltar}>Voltar</button>
        </div>
    );
}