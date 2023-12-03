/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


export default function ListaCliente(props) {
    

    const clientes = [
        {
            nome: "Cliente 1",
            nomeSocial: "Nome Social 1",
            cpf: "123.456.789-01",
            dataEmissaoCpf: "01/01/2022",
        },
        {
            nome: "Cliente 2",
            nomeSocial: "Nome Social 2",
            cpf: "234.567.890-12",
            dataEmissaoCpf: "02/02/2022",
        },
        // Adicione mais clientes conforme necessário
    ];

    let tema = props.tema
    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Nome Social</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Data de Emissão do CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente, index) => (
                        <tr key={index} style={{ backgroundColor: tema }}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.nomeSocial}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.dataEmissaoCpf}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}