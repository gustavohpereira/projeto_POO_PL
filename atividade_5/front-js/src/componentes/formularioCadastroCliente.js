import React, { useState } from "react";
import axios from "axios";

const FormularioCadastroCliente = (props) => {
    const [nome, setNome] = useState("");
    const [nomeSocial, setNomeSocial] = useState("");
    const [cpfValor, setCpfValor] = useState("");
    const [cpfDataEmissao, setCpfDataEmissao] = useState("");
    const [rgValor, setRgValor] = useState("");
    const [rgDataEmissao, setRgDataEmissao] = useState("");
    const [ddd, setDdd] = useState("");
    const [numero, setNumero] = useState("");

    const tema = props.tema;

    const handleCadastrar = async () => {
        try {
            const formattedData = {
                nome,
                nomeSocial,
                cpf: {
                    valor: cpfValor,
                    dataEmissao: new Date(cpfDataEmissao).toISOString()
                },
                rgs: [
                    {
                        valor: rgValor,
                        dataEmissao: new Date(rgDataEmissao).toISOString()
                    }
                ],
                telefones: [
                    {
                        ddd,
                        numero
                    }
                ]
            };

            await cadastrarCliente(formattedData);
            window.location.reload();
        } catch (error) {
            console.error(error);
            // Adicione um tratamento adequado de erros, como exibir uma mensagem para o usuário.
        }
    };

    const cadastrarCliente = async (data) => {
        try {
            await axios.post("http://localhost:3000/cliente/create", data);
        } catch (error) {
            throw error;
        }
    };

    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="nome"
                        className="form-control"
                        placeholder="Nome"
                        aria-label="Nome"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="nomeSocial"
                        className="form-control"
                        placeholder="Nome social"
                        aria-label="Nome social"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setNomeSocial(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="cpfValor"
                        className="form-control"
                        placeholder="CPF"
                        aria-label="CPF"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setCpfValor(e.target.value)}
                    />
                    <input
                        type="date"
                        name="cpfDataEmissao"
                        className="form-control"
                        onChange={(e) => setCpfDataEmissao(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="rgValor"
                        className="form-control"
                        placeholder="RG"
                        aria-label="RG"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setRgValor(e.target.value)}
                    />
                    <input
                        type="datetime-local"
                        name="rgDataEmissao"
                        className="form-control"
                        onChange={(e) => setRgDataEmissao(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="ddd"
                        className="form-control"
                        placeholder="DDD"
                        aria-label="DDD"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setDdd(e.target.value)}
                    />
                    <input
                        type="text"
                        name="numero"
                        className="form-control"
                        placeholder="Número de telefone"
                        aria-label="Número de telefone"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </div>

                <div className="input-group mb-3">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ background: tema }}
                        onClick={handleCadastrar}
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormularioCadastroCliente;