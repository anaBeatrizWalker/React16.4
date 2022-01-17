import React from 'react'
import ReactDOM from 'react-dom'

import Multi, { BoaNoite } from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana Beatriz"/>
        <BoaNoite nome="Ana Beatriz"/>
    </div>
    , document.getElementById('root'))