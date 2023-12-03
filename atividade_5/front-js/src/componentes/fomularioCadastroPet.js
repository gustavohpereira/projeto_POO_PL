
import React, { useState } from "react";
import axios from "axios";

export function FormularioCadastroPet({ tema }) {
  const [petData, setPetData] = useState({
    nome: "",
    raca: "",
    genero: "",
    tipo: "",
    cpf_dono: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPetData({ ...petData, [id]: value });
  };

  const handleCadastrar = async () => {
    console.log("Pet Data:", petData);

    await axios.post("http://localhost:3000/cliente/addpet", petData).then(() => {
        window.location.reload()
    })

  };

  return (
    <div className="container-fluid">
      <form>
        <div className="mb-3">
          <label htmlFor="nome">Nome do Pet:</label>
          <input type="text" className="form-control" id="nome" value={petData.nome} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="raca">Raça do Pet:</label>
          <input type="text" className="form-control" id="raca" value={petData.raca} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="genero">Gênero do Pet:</label>
          <input type="text" className="form-control" id="genero" value={petData.genero} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tipo">Tipo do Pet:</label>
          <input type="text" className="form-control" id="tipo" value={petData.tipo} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="cpf_dono">CPF do Dono:</label>
          <input type="text" className="form-control" id="cpf_dono" value={petData.cpf_dono} onChange={handleInputChange} />
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