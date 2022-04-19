import React from "react";
import {Link} from 'react-router-dom';


export default function LandingPage(){
    return(
        <div>
            <div>
                <h1>Bienvenidos al SDGA Tour!</h1>
                <Link to='/registro'>
                    <button>Registrarse</button>
                </Link>
                <Link to='/ingreso'>
                    <button>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}