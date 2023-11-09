jsx
Copy code
import React from "react";

type Props = {
  tema: string;
};

export function FormularioCadastroPet({ tema }: Props): React.ReactElement {
  const handleCadastrar = () => {
    // Lógica de cadastro aqui
  };

  return (
    <div className="container-fluid">
      <form>
        <div className="mb-3">
          <label htmlFor="nome">Nome do Pet:</label>
          <input type="text" className="form-control" id="nome" />
        </div>
        <div className="mb-3">
          <label htmlFor="raca">Raça do Pet:</label>
          <input type="text" className="form-control" id="raca" />
        </div>
        <div className="mb-3">
          <label htmlFor="genero">Gênero do Pet:</label>
          <input type="text" className="form-control" id="genero" />
        </div>
        <div className="mb-3">
          <label htmlFor="tipo">Tipo do Pet:</label>
          <input type="text" className="form-control" id="tipo" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpf_dono">CPF do Dono:</label>
          <input type="text" className="form-control" id="cpf_dono" />
        </div>
        <div className="mb-3">
          <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={handleCadastrar}>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}