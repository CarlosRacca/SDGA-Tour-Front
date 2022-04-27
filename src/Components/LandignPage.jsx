import React from "react";
// import {Link} from 'react-router-dom';
import '../Styles/LandingPage.modules.css';
import Login from "./Login";

export default function LandingPage(){
    
    return(
        <div className='divLanding'>
            <h1 className='h1landing'>Bienvenidos al SDGA Tour!</h1>
            {/* <img src='LOGO SDGA.jpeg'/> */}
            {/* <Link to='/register'>
                <button>Registrarse</button>
            </Link> */}
            <Login></Login>
            {/* <Link to='/login'>
                <button>Ingresar</button>
            </Link> */}
        </div>
    );
};