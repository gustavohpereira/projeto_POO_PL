import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaServico from "./listaServicos";
import ListaPets from "./listaPets";
import FormularioCadastroPet from "./fomularioCadastroPet";
import Listaprodutos from "./listaProdutos";
import FormularioCadastroProdutos from "./formularioCadastroProdutos";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'lista de clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }


    
    render() {

        let botoes = {
            clientes: [`cadastrar Cliente`,`lista de clientes`],
            servicos: [`cadastrar servico`,`lista de serviços`],
            produtos: [`cadastrar produtos`,`lista de produtos`],
            pets: [`cadastrar pet`,`lista de pets`]
    
        }


        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={botoes} />
        if (this.state.tela === 'lista de clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'cadastrar Cliente'){
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }

        else if(this.state.tela === 'cadastrar servico'){
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        }

        else if(this.state.tela === 'lista de serviços'){
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        }


        else if(this.state.tela === 'cadastrar produtos'){
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdutos tema="#e3f2fd" />
                </>
            )
        }

        else if(this.state.tela === 'lista de produtos'){
            return (
                <>
                    {barraNavegacao}
                    <Listaprodutos tema="#e3f2fd" />
                </>
            )
        }

        else if(this.state.tela === 'cadastrar pet'){
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroPet tema="#e3f2fd" />
                </>
            )
        }

        else if(this.state.tela === 'lista de pets'){
            return (
                <>
                    {barraNavegacao}
                    <ListaPets tema="#e3f2fd" />
                </>
            )
        }
    }

    
}