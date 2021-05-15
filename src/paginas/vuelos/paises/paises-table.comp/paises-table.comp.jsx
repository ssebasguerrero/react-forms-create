import React from 'react'
import './paises-table.style.css'

const TablaPaises = (props) => {
        return (
            <div className="tabla-paises">
                {props.paisNombre}
            </div>
        )
    }

export default TablaPaises;