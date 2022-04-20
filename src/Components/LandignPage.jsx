import React from "react";
import {Link} from 'react-router-dom';

export default function LandingPage(){
    
    return(
        <div>
            <div>
                <h1>Bienvenidos al SDGA Tour!</h1>
                <Link to='/register'>
                    <button>Registrarse</button>
                </Link>
                <Link to='/login'>
                    <button>Ingresar</button>
                </Link>
            </div>
        </div>
    );
};