import React, { useState } from "react";

export default function FormularioCadastroCliente(props) {
    const [clienteData, setClienteData] = useState({
        nome: "",
        nomeSocial: "",
        email: ""
    });

    let tema = props.tema;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClienteData({ ...clienteData, [name]: value });
    };

    const handleCadastrar = () => {

        console.log("Cliente Data:", clienteData);

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
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={handleCadastrar}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}