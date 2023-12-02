import React from "react";



export default function ListaPets({ tema }){
    const pets = [
        { nome: "Pet 1", raca: "Raça 1", genero: "Masculino", tipo: "Cachorro", cpfDono: "123.456.789-01" },
        { nome: "Pet 2", raca: "Raça 2", genero: "Feminino", tipo: "Gato", cpfDono: "234.567.890-12" },
        { nome: "Pet 3", raca: "Raça 3", genero: "Masculino", tipo: "Cachorro", cpfDono: "345.678.901-23" },
        { nome: "Pet 4", raca: "Raça 4", genero: "Feminino", tipo: "Gato", cpfDono: "456.789.012-34" },
        { nome: "Pet 5", raca: "Raça 5", genero: "Masculino", tipo: "Cachorro", cpfDono: "567.890.123-45" },
        { nome: "Pet 6", raca: "Raça 6", genero: "Feminino", tipo: "Gato", cpfDono: "678.901.234-56" },
    ];

    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Raça</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Tipo</th>
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
                            <td>{pet.cpfDono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}