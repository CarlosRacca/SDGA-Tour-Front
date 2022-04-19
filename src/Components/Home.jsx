import React from "react";
import {Link} from 'react-router-dom';


export default function Home(){
    return(
        <div>
            <div>
                <h1>Leaderboard</h1>
            </div>
            <div>
                <Link to='/cargarTarjeta'>
                    <button>Cargar Tarjeta</button>
                </Link>
            </div>
        </div>
    )
}