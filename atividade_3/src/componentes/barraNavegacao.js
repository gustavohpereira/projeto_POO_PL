/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";

export default function BarraNavegacao(props) {
    const gerarListaBotoes = () => {
        const botoes = props.botoes;

        if (!botoes) {
            return <></>;
        }

        const botoesKeys = Object.keys(botoes);

        if (botoesKeys.length <= 0) {
            return <></>;
        }

        const listaBotoes = botoesKeys.map((key) => {
            const submenu = botoes[key].map((value) => (
                <li key={value} className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => props.seletorView(value, e)}>{value}</a>
                </li>
            ));

            return (
                <li key={key} className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {key}
                    </a>
                    <ul className="dropdown-menu">
                        {submenu}
                    </ul>
                </li>
            );
        });

        return listaBotoes;
    }

    let tema = props.tema;
    return (
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{ backgroundColor: tema, marginBottom: 10 }}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">PetLovers</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {gerarListaBotoes()}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}