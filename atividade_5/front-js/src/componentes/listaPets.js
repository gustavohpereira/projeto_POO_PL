import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListaPets({ tema }){

    const [pets, setPets] = useState([])

    const fetchPets = async () => {
        await axios.get("http://localhost:3000/pet/fetchall").then((response) => {
            const data = response.data
            setPets(data)
        })
    }

    useEffect(() => {
        fetchPets()
    }, [])

    console.log(pets);

    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Raça</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Tipo</th>
                        <th scope='col'>Nome do Dono</th>
                        <th scope="col">CPF do Dono</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, index) => (
                        <tr key={index} style={{ backgroundColor: tema }}>
                            <td>{pet.nome}</td>
                            <td>{pet.raca}</td>
                            <td>{pet.genero}</td>
                            <td>{pet.tipo}</td>
                            <td>{pet.cliente.nome}</td>
                            <td>{pet.cliente.cpf.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}