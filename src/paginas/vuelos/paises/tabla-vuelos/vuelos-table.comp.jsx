import React from 'react';
import TablaCiudades from '../ciudades-table/ciudades-table.comp';
import TablaPaises from '../paises-table.comp/paises-table.comp';
import TablaVuelosContinente from '../vuelos-continent/vuelos-continent.comp';
import './vuelos-table.style.css'

const TablaVuelos = (props) => {
    //console.log({props});

    return (
        <div className= "tabla-vuelos sombra">
        Lista de Vuelos
        {props.vuelosList.map((continente,index)=>{
           return (
           <React.Fragment key={continente.id}> 
            <TablaVuelosContinente nombreContinente={continente.name}/>
            {continente.paises.map ((pais, indexPais)=>{
                return (
                    <React.Fragment key={pais.id}>
                        <TablaPaises
                        key={pais.id}
                        paisNombre={pais.paisNombre}
                        />
                        {pais.ciudades.map ((ciudad, indexCiudad)=>{
                            return (
                                <TablaCiudades
                                key={ciudad.id}
                                ciudad={ciudad}
                                />
                            );
                        })}  
                    </React.Fragment>
                );      
            })}
           </React.Fragment>
           );
        })}

        </div> 
    )
}

export default TablaVuelos;