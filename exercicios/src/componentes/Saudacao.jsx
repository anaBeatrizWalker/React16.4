import React, { Component } from "react"

export default class Saudacao extends Component{
    //valor inicial passado pelas props
    state = {tipo: this.props.tipo, nome: this.props.nome}

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
                <input type="text" placeholder="Tipo da saudação" value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome" value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}