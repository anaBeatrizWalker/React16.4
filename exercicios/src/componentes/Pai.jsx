import React, { cloneElement } from "react"

//Para ca filho, clona o elemento passando as propriedades do pai e as próprias propriedades do filho
function childrenWithProps(props){
    return React.Children.map(props.children, child => {
        return cloneElement(child, {...props, ...child.props})
    })
}

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos: </h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>