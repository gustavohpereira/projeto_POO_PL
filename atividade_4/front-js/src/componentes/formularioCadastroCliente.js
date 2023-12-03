import React, { useState } from "react";
import axios from "axios";

export default function FormularioCadastroCliente (props) {
    console.log("FormularioCadastroCliente");
    const [clienteData, setClienteData] = useState({
        nome: "",
        nomeSocial: "",
        email: "",
        endereco: {
            estado: "",
            cidade: "",
            bairro: "",
            rua: "",
            numero: "",
            codigoPostal: "",
            informacoesAdicionais: ""
        },
        telefones: [
            {
                numero: "",
                ddd: "",
            }
        ]
    });

    let tema = props.tema;

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

    const handleCadastrar = async () => {
        try{
            await axios.post("http://localhost:32831/cliente/cadastrar", clienteData).then(() => {
                window.location.reload()
            })
        }catch(error){
            console.error(error)
        }
    };

    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input type="text" name="nome" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="nomeSocial" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" name="email" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.estado" className="form-control" placeholder="Estado" aria-label="Estado" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.cidade" className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.bairro" className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.rua" className="form-control" placeholder="Rua" aria-label="Rua" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.numero" className="form-control" placeholder="Número" aria-label="Número" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.codigoPostal" className="form-control" placeholder="Código postal" aria-label="Código postal" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="endereco.informacoesAdicionais" className="form-control" placeholder="Informações adicionais" aria-label="Informações adicionais" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="telefones[0].ddd" className="form-control" placeholder="DDD" aria-label="DDD" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="telefones[0].numero" className="form-control" placeholder="Número de telefone" aria-label="Número de telefone" aria-describedby="basic-addon1" onChange={handleInputChange} />
                </div>

                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={handleCadastrar}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}