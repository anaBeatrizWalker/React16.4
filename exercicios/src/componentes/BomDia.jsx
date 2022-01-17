import React, {Fragment} from 'react'

export default (props) => 
    <Fragment> 
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Bem-vinda</h2>
    </Fragment> //substitui a div no html

/* 
export default (props) => [ //substitui a div no html
        <h1 key="h1">Bom dia, {props.nome}!</h1>
        <h2 key="h2">Bem-vinda</h2>
    ]
*/
    