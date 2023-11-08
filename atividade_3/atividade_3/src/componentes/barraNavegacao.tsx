/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    tema: string,
    botoes: {
        [key: string]: string[]; // Usando uma assinatura de índice para permitir chaves de string
    },
    seletorView: Function
}

export default class BarraNavegacao extends Component<props> {
    constructor(props: props | Readonly<props>) {
      super(props);
      this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
    }
  
    gerarListaBotoes() {

        
        return Object.keys(this.props.botoes).map((categoria) => {
          const botoes = this.props.botoes[categoria];
    
          if (botoes.length <= 0) {
            return null;
          } else {
            return (
              <li key={categoria} className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {categoria}
                </a>
                <div className="dropdown-menu">
                  {botoes.map((valor) => (
                    <a
                      key={valor}
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => this.props.seletorView(valor, e)}
                    >
                      {valor}
                    </a>
                  ))}
                </div>
              </li>
            );
          }
        });
      }
    
  
    render() {
      let tema = this.props.tema;
      return (
        <>
          <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{ backgroundColor: tema, marginBottom: 10 }}>
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1">PetLovers</span>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">{this.gerarListaBotoes()}</ul>
              </div>
            </div>
          </nav>
        </>
      );
    }
  }
  