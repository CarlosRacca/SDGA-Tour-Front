import React from "react";
import {Link} from 'react-router-dom';

export default function CargarTarjeta(){
    return(
        <div>
            <form>
                <label>
                    Ida:
                    <input type='text'></input>
                </label>
                <label>
                    Vuelta:
                    <input type='text'></input>
                </label>
                <label>
                    Handicap:
                    <input type='text'></input>
                </label>
                <label>
                    Matrícula:
                    <input type='text'></input>
                </label>
                
                <Link to='/home'>
                    <button>Presentar</button>
                </Link>
            </form>
        </div>
    )
}