import React from "react";

type Props = {
  tema: string;
};

export function FormularioCadastroServico({ tema }: Props): React.ReactElement {
  return (
    <div className="container-fluid">
      <form>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Valor do serviço" aria-label="Nome social" aria-describedby="basic-addon1" />
        </div>
      </form>
    </div>
  );
}