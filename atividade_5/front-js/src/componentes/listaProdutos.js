import React, { useEffect, useState } from "react";
import axios from "axios"

export function ListaProduto({ tema }) {
  const [produtos, setProdutos] = useState([])

  const fetchClients = async () => {
      await axios.get("http://localhost:3000/produto/fetchall", {
          validateStatus: function(status) {
              return true
          }
      }).then((response) => {
          const data = response.data
          setProdutos(data)
      })
  }

  useEffect(() => {
      fetchClients()
  }, [])



  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nome do Produto</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={index} style={{ backgroundColor: tema }}>
              <td>{produto.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}