/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type produto = {
    nome: string;
    valor: number;
};

type Props = {
    tema: string;
};

export default class ListaProduto extends Component<Props> {
    produtos: produto[] = [
        { nome: "Produto 1", valor: 50.00 },
        { nome: "Produto 2", valor: 75.00 },
        { nome: "Produto 3", valor: 100.00 },
        { nome: "Produto 4", valor: 120.00 },
        { nome: "Produto 5", valor: 90.00 },
        { nome: "Produto 6", valor: 60.00 },
    ];

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome do Produto</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.produtos.map((produto, index) => (
                            <tr key={index} style={{ backgroundColor: tema }}>
                                <td>{produto.nome}</td>
                                <td>{`R$ ${produto.valor.toFixed(2)}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}