import React from "react";
import { Link } from 'react-router-dom';

export default function Rules(){

    return(
        <div>
           <h1>Reglas del SDGA Tour</h1> 
           <div>
                <h4>Promociones</h4>
                <p>Las promociones deben jugarse en modalidad match con el 85% del handicap antes del segundo domingo del mes a las 20:00hs</p>
           </div>
           <div>
                <h4>Sanciones Económicas</h4>
                <p>No pagar inscripción antes del segundo domingo del mes, tiene una multa de $500 por fecha jugada</p>
                <p>Elegir horario de salida tiene un costo de $500</p>
                <p>Faltar sin justidicado médico, habiendo confirmado asistencia, tiene una multa de $500</p>
           </div>
           <div>
               <h4>Reglas Generales</h4>
               <p>Todos los jugadores tienen una fecha excepción para jugar en la semana</p>
               <p>Descalificación a través de Golfistics tiene un score de 110 neto</p>
               <p>Para validar la linea hacen falta por lo menos 2 jugadores del torneo y un marker</p>
           </div>
           <Link to='/home'>
                <button>Volver</button>
           </Link>
        </div>
    )
}