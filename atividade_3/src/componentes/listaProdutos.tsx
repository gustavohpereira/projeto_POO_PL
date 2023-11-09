import React from "react";

type Produto = {
  nome: string;
  valor: number;
};

type Props = {
  tema: string;
};

export function ListaProduto({ tema }: Props): React.ReactElement {
  const produtos: Produto[] = [
    { nome: "Produto 1", valor: 50.00 },
    { nome: "Produto 2", valor: 75.00 },
    { nome: "Produto 3", valor: 100.00 },
    { nome: "Produto 4", valor: 120.00 },
    { nome: "Produto 5", valor: 90.00 },
    { nome: "Produto 6", valor: 60.00 },
  ];

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
          {produtos.map((produto, index) => (
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