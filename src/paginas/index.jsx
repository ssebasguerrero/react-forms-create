import React, { useState } from 'react';
import './index.style.css'

import TablaVuelos from './vuelos/paises/tabla-vuelos/vuelos-table.comp';

const VuelosPag = () => {
    const [nombreContinente, setNombreContinente] = useState('c1');
    const [nombrePais, setNombrePais] = useState('');
    const [nombreCiudad, setNombreCiudad] = useState('');
    const [precio, setPrecio] = useState(0);
    //onst [fecha, setFecha] = useState('20/04/21');

    const agregarVuelo = (event) =>{
        event.preventDefault();
        
        console.log('nombreContinente: ' + nombreContinente);
        console.log('nombrePais: ' + nombrePais);
        console.log('nombreCiudad: ' + nombreCiudad);
        console.log('precio: ' + precio);
    }

    let vuelosList = [
            {
                id:"v1",
                name:'Vuelos Asia',
                paises:[
                    { 
                        id:"v1p1",
                      paisNombre:"Japon" ,
                      ciudades:[
                        {   
                            id:"v1p1c1",
                           nombreCiudad:'Tokio',
                           precio: '$35.00',
                           fecha:'14 Junio'
                        },
                        {   
                            id:"v1p1c2",
                            nombreCiudad:'Hokaido',
                            precio: '$50.00',
                            fecha:'17 abril'
                         },
                         {   
                            id:"v1p1c3",
                            nombreCiudad:'Kioto',
                            precio: '$40.00',
                            fecha:'01 Julio'
                         },
                         {   
                            id:"v1p1c4",
                            nombreCiudad:'Osaka',
                            precio: '$10.00',
                            fecha:'25 Diciembre'
                         },

                         {   
                            id:"v1p1c5",
                           nombreCiudad:'Hiroshima',
                           precio: '$52.00',
                           fecha:'8 Junio'
                        },
                        {
                            id:"v1p1c6",
                            nombreCiudad:'Nagasaki',
                            precio: '$10.00',
                            fecha:'17 Enero'
                         },
                         {   
                            id:"v1p1c7",
                            nombreCiudad:'Nigata',
                            precio: '$60.02',
                            fecha:'01 Julio'
                         },
                         {   
                            id:"v1p1c8",
                            nombreCiudad:'Kobe',
                            precio: '$90.00',
                            fecha:'2 Agosto'
                         }
                        ]
                    }   
                ]
            },
            {   
                id:"v2",
                name:'Vuelos Africa',
                paises:[
                    {
                    id:"v2p2",
                    paisNombre:"Africa" ,
                    ciudades:[
                      {  
                        id:"v2p2c1",
                         nombreCiudad:'Sidney',
                         precio: '$20.00',
                         fecha:'17 Septiembre',
                      },
                      {
                        id:"v2p2c2",
                          nombreCiudad:'Perth',
                          precio: '$40.00',
                          fecha:'30 Julio',
                       },
                       {  
                        id:"v2p2c3",
                         nombreCiudad:'Adelaida',
                         precio: '$80.00',
                         fecha:'07 Agosto',
                      },
                      {
                        id:"v2p2c4",
                          nombreCiudad:'Canberra',
                          precio: '$70.00',
                          fecha:'12 Septiembre',
                       },
                       {
                        id:"v2p2c5",
                          nombreCiudad:'hobart',
                          precio: '$35.40',
                          fecha:'20 Octubre',
                       },
                       {
                        id:"v2p2c6",
                          nombreCiudad:'Darwin',
                          precio: '$73.50',
                          fecha:'16 Noviembre',
                       }
                    ]
                }
            ]
        }
    ];
    
    const [vuelos, setVuelos] = useState(vuelosList);

    return(
    <div>

            <TablaVuelos 
                vuelosList={vuelos}
                agregarVuelo = {
                    (ObjVuelo, vueloID) =>
                    {
                        const nuevoVuelo = [];
                        for (let i = 0; i < vuelos.length; i++) {
                           if(vuelos[i].id === vueloID)
                           {
                                nuevoVuelo.push(vuelos[i]);
                           }
                           else
                           {
                               nuevoVuelo.push(
                                   {
                                        ...vuelos[i],
                                        vuelos:[vuelos[i].vuelos, ObjVuelo]
                                   }
                               );
                           }
                        }
                        setVuelos(nuevoVuelo);
                    }
                }
            />
         
        <main className="contenedor2 sombra">
            <section>
                <h2>Crear viaje</h2>
                <form className="formulario">
                    <fieldset>
                        <div className="contenedor-campos">
                        <div className="campo">
                        <label> Continente </label>
                        </div>
                        <div className="campo">
                            <select value={nombreContinente}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                setNombreContinente(event.target.value);
                            }}
                            className="input-text">
                           <option value="c1">Asia</option>
                           <option value="c2">Africa</option>
                           </select></div>
                            
                        <div className="campo">
                            <label > Nombre Pais</label>
                            <input className="input-text" 
                            type="text" 
                            value={nombrePais}
                            onChange={(event)=>{
                                setNombrePais(event.target.value);
                            }}
                            placeholder="Nombre país"/>
                            </div>

                        <div className="campo">
                            <label > Nombre ciudad</label>
                            <input value={nombreCiudad}
                            onChange={(event)=>{
                                setNombreCiudad(event.target.value);
                            }}
                            className="input-text" type="text" placeholder="Nombre ciudad"/>
                        </div>
                
                        <div className="campo">
                             <label>Precio</label>
                            <input value={precio}
                            onChange={(event)=>{
                                setPrecio(event.target.value);
                            }}
                            className="input-text" type="number" placeholder="Precio vuelo"/>
                        </div>
                
                        <div className="campo">
                            <label>Fecha</label>
                            <input className="input-text" type="date" placeholder="Fecha vuelo"/>
                        </div>
                
                    </div>

            <div className="alinear-derecha flex">
                <input onClick={agregarVuelo}
                 className="boton w-100" type="submit" value="Crear"/>
            </div>

                    </fieldset>

                </form>
            </section>
        </main>
    </div> 
    )   
}

export default VuelosPag;