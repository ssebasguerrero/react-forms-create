import React from 'react'
import './ciudades-table.style.css'

const TablaCiudades = (props) => {
        return (
            <div className="tabla-ciudades ">
                {props.ciudad.nombreCiudad} {props.ciudad.precio} {props.ciudad.fecha}
            </div>
        )
    }

export default TablaCiudades;