import React, { cloneElement } from "react"

//Para cada filho, clona o elemento passando as propriedades do pai e as próprias propriedades do filho
export function childrenWithProps(props){
    return React.Children.map(props.children, child => {
        return cloneElement(child, {...props, ...child.props})
    })
}