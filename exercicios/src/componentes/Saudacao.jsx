import React, { Component } from "react"

export default class Saudacao extends Component{

    //valor inicial passado pelas props
    state = {tipo: this.props.tipo, nome: this.props.nome}

    constructor(props){
        super(props)

        //fixa o this para que a função referencie o objeto atual
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    setTipo(e){
        //atualizando o estado
        this.setState({ tipo: e.target.value })
    }

    setNome(e){
        //atualizando o estado
        this.setState({ nome: e.target.value })
    }

    render(){
        //acessando as props com o estado do objeto(somente leitura)
        const { tipo, nome } = this.state

        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo da saudação" value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome" value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}