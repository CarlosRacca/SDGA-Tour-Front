import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/Rules.modules.css';

export default function Rules(){

    return(
        <div className='divBack'>
            <div className='divIntern'>
                <h1 className='h1Rules'>Reglas del SDGA Tour</h1> 
                <div>
                        <h4 className='h4Titles'>Generales:</h4>
                    <p className='pRules'>- Todos los jugadores tienen una fecha excepción para jugar en la semana.</p>
                    <p className='pRules'>- Descalificación a través de Golfistics tiene un score de 110 neto.</p>
                    <p className='pRules'>- Para validar la linea hacen falta por lo menos 2 jugadores del torneo y un marker.</p>
                </div>
                <div>
                        <h4 className='h4Titles'>Promociones:</h4>
                        <p className='pRules'>- Las promociones deben jugarse en modalidad match con el 85% del handicap antes del segundo domingo del mes a las 20:00hs.</p>
                </div>
                <div>
                        <h4 className='h4Titles'>Sanciones Económicas:</h4>
                        <p className='pRules'>- No pagar inscripción antes del segundo domingo del mes, tiene una multa de $500 por fecha jugada.</p>
                        <p className='pRules'>- Elegir horario de salida tiene un costo de $500.</p>
                        <p className='pRules'>- Faltar sin justidicado médico, habiendo confirmado asistencia, tiene una multa de $500.</p>
                </div>
                <div className='divButtonRules'>
                    <Link to='/home'>
                            <button className='buttonRules'>Volver</button>
                    </Link>
                </div>
           </div>
        </div>
    )
}