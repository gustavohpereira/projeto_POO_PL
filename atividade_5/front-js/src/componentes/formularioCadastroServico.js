import React, { useState } from "react";
import axios from "axios"

export function FormularioCadastroServico({ tema }) {
  const [servicoData, setServicoData] = useState({
    nome: "",
    valor: ""
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServicoData({ ...servicoData, [name]: value });
    
  };

  const handleCadastrar = async () => {
    try{
      await axios.post("http://localhost:3000/servico/create", servicoData).then(() => {
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
            style={{ background: tema }}
            onClick={handleCadastrar}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}