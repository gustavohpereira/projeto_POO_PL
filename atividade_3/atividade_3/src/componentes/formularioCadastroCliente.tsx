import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
        <form>
          <div className="mb-3">
            <label htmlFor="nome">Nome do Cliente:</label>
            <input type="text" className="form-control" id="nome" readOnly />
          </div>
          <div className="mb-3">
            <label htmlFor="nomeSocial">Nome Social do Cliente:</label>
            <input type="text" className="form-control" id="nomeSocial"  readOnly />
          </div>
          <div className="mb-3">
            <label htmlFor="valor">Número do CPF:</label>
            <input type="text" className="form-control" id="valor" readOnly />
          </div>
          <div className="mb-3">
            <label htmlFor="data">Data de Emissão do CPF (dd/mm/yyyy):</label>
            <input type="text" className="form-control" id="data"  readOnly />
          </div>
          <div className="mb-3">
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
        )
    }
}