import React, { useEffect, useState } from "react";
import axios from "axios"


export function ListaServico({ tema }){
    
  const [servicos, setServicos] = useState([])

  const fetchClients = async () => {
      await axios.get("http://localhost:3000/servico/fetchall", {
          validateStatus: function(status) {
              return true
          }
      }).then((response) => {
          const data = response.data
          setServicos(data)
      })
  }

  useEffect(() => {
      fetchClients()
  }, [])


console.log(servicos)
  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nome do Serviço</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map((servico, index) => (
            <tr key={index} style={{ backgroundColor: tema }}>
              <td>{servico.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}