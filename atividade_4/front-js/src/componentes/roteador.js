import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import { FormularioCadastroPet } from "./fomularioCadastroPet";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import { FormularioCadastroProdutos } from "./formularioCadastroProdutos";
import { FormularioCadastroServico } from "./formularioCadastroServico";
import ListaCliente from "./listaCliente";
import ListaPets from "./listaPets";
import { ListaProduto } from "./listaProdutos";
import { ListaServico } from "./listaServicos";

export default function Roteador(){
  const [tela, setTela] = useState('lista de clientes');

  const selecionarView = (novaTela, evento) => {
    evento.preventDefault();
    setTela(novaTela);
  };

  const botoes = {
    clientes: [`cadastrar cliente`, `lista de clientes`],
    servicos: [`cadastrar servico`, `lista de serviços`],
    produtos: [`cadastrar produtos`, `lista de produtos`],
    pets: [`cadastrar pet`, `lista de pets`],
  };

  let conteudo =  null
  console.log("tela",tela)
  switch (tela) {
    case 'lista de clientes':
      conteudo = <ListaCliente tema="#e3f2fd" />;
      break;
    case 'cadastrar cliente':
      
      conteudo = <FormularioCadastroCliente tema="#e3f2fd" />;
      break;
    case 'cadastrar servico':
      conteudo = <FormularioCadastroServico tema="#e3f2fd" />;
      break;
    case 'lista de serviços':
      conteudo = <ListaServico tema="#e3f2fd" />;
      break;
    case 'cadastrar produtos':
      conteudo = <FormularioCadastroProdutos tema="#e3f2fd" />;
      break;
    case 'lista de produtos':
      conteudo = <ListaProduto tema="#e3f2fd" />;
      break;
    case 'cadastrar pet':
      conteudo = <FormularioCadastroPet tema="#e3f2fd" />;
      break;
    case 'lista de pets':
      conteudo = <ListaPets tema="#e3f2fd" />;
      break;
    default:
      conteudo = null;
  }
  return (
    <>
      <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={botoes} />
      {conteudo}
    </>
  );
};
