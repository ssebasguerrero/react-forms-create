import React from 'react';
import './vuelos-continent.style.css'

const TablaVuelosContinente = (props) => {
    return (
        <div className= "vuelos-continent">
            {props.nombreContinente}
    
        </div>
    )
}
export default TablaVuelosContinente;