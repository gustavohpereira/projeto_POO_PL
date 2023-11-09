import React from "react";

type Servico = {
  nome: string;
  valor: number;
};

type Props = {
  tema: string;
};

export function ListaServico({ tema }: Props): React.ReactElement {
  const servicos: Servico[] = [
    { nome: "Serviço 1", valor: 50.00 },
    { nome: "Serviço 2", valor: 75.00 },
    { nome: "Serviço 3", valor: 100.00 },
    { nome: "Serviço 4", valor: 120.00 },
    { nome: "Serviço 5", valor: 90.00 },
    { nome: "Serviço 6", valor: 60.00 },
  ];

  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nome do Serviço</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map((servico, index) => (
            <tr key={index} style={{ backgroundColor: tema }}>
              <td>{servico.nome}</td>
              <td>{`R$ ${servico.valor.toFixed(2)}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}