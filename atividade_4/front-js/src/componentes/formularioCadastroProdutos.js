import React, { useState } from "react";

export function FormularioCadastroProdutos() {
  const [produtoData, setProdutoData] = useState({
    nome: "",
    valor: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProdutoData({ ...produtoData, [name]: value });
  };

  const handleCadastrar = () => {

    console.log("Produto Data:", produtoData);

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
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            name="valor"
            className="form-control"
            placeholder="Valor do serviço"
            aria-label="Valor do serviço"
            aria-describedby="basic-addon1"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleCadastrar}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}