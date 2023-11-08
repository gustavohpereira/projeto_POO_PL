/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaPets extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">PET 1</a>
                    <a href="#" className="list-group-item list-group-item-action">PET 2</a>
                    <a href="#" className="list-group-item list-group-item-action">PET 3</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >PET 4</a>
                    <a href="#" className="list-group-item list-group-item-action">PET 5</a>
                    <a href="#" className="list-group-item list-group-item-action">PET 6</a>
                </div>
            </div>
        )
    }
}