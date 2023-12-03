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
    const [AtualizarCliente, setAtualizarCliente] = useState(null)

    const handleVisualizar = (client) => {
        setClienteSelecionado(client);
    };
    
    const handleVoltar = () => {
        setClienteSelecionado(null);
        setAtualizarCliente(null)
    };

    function onAtualizar(client) {
        setAtualizarCliente(client);
    }



    const handleDeletar = async (client) => {

        await axios.delete("http://localhost:32831/cliente/excluir", {data:{id:client.id}}).then(() => {
            window.location.reload()    
        })
    }

    if (clienteSelecionado) {
        return (
            <div>
                <VisualizarCliente client={clienteSelecionado} handleVoltar={handleVoltar} />
            </div>
            
        )
    }
    if (AtualizarCliente) {

        return (

                <AtualizarClienteFunction client={AtualizarCliente} handleVoltar={handleVoltar} />
        )
    }

    return (
        <div>
           
                <TabelaClientes onVisualizar={handleVisualizar} onAtualizar={onAtualizar} handleDeletar={handleDeletar} clients={clients} />
            
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
                            <td className="btn-group">
                                <button className="btn btn-outline-secondary" onClick={() => props.onVisualizar(client)}>Visualizar</button>
                                <button className="btn btn-outline-secondary" onClick={() => props.handleDeletar(client)}>Excluir</button>
                                <button className="btn btn-outline-secondary" onClick={() => props.onAtualizar(client)}>Atualizar</button>
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
            <button  className="btn btn-outline-secondary" onClick={props.handleVoltar}>Voltar</button>
        </div>
    );
}

export function AtualizarClienteFunction (props){


  
    const [clienteData, setClienteData] = useState(props.client);

    let tema = "#e3f2fd";

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const updatedClienteData = { ...clienteData };

        if (name.startsWith('endereco')) {
            const enderecoField = name.split('.')[1];
            updatedClienteData.endereco = {
                ...updatedClienteData.endereco,
                [enderecoField]: value,
            };
        }
        else if (name.startsWith('telefones')) {
            const telefoneField = name.split('.')[1];
            updatedClienteData.telefones[0] = {
                ...updatedClienteData.telefones[0],
                [telefoneField]: value,
            };
        }
        else {
            updatedClienteData[name] = value;
        }

        setClienteData(updatedClienteData);
    };

    const handleAtualizar = async () => {
        try {
          await axios.put("http://localhost:32831/cliente/atualizar", clienteData);
          // Do something after a successful update, e.g., redirect or reload data
          window.location.reload();
        } catch (error) {
          console.error(error);
          // Handle error, show a message to the user, etc.
        }
      };


        return(
        <div className="container-fluid">
            <h1 className="font-3 mb-3">Atualizar cliente</h1>
            <form>
                <div className="input-group mb-3">
                    <input type="text" name="nome" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.nome} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="nomeSocial" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.nomeSocial} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" name="email" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" onChange={handleInputChange} value = {clienteData.email} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.estado" className="form-control" placeholder="Estado" aria-label="Estado" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.endereco.estado} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.cidade" className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.endereco.cidade}/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.bairro" className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.endereco.bairro} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.rua" className="form-control" placeholder="Rua" aria-label="Rua" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.endereco.rua}/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.numero" className="form-control" placeholder="Número" aria-label="Número" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.endereco.numero}/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.codigoPostal" className="form-control" placeholder="Código postal" aria-label="Código postal" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.endereco.codigoPostal}/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.informacoesAdicionais" className="form-control" placeholder="Informações adicionais" aria-label="Informações adicionais" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.endereco.informacoesAdicionais}/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="telefones[0].ddd" className="form-control" placeholder="DDD" aria-label="DDD" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.telefones[0].ddd} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="telefones[0].numero" className="form-control" placeholder="Número de telefone" aria-label="Número de telefone" aria-describedby="basic-addon1" onChange={handleInputChange} value={clienteData.telefones[0].numero}/>
                </div>

                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={handleAtualizar}>Atualizar</button>
                </div>
            </form>
            <button  className="btn btn-outline-secondary" onClick={props.handleVoltar}>Voltar</button>
    </div>
    )
}


