import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/LandingPage.modules.css';
import Login from "./Login";

export default function LandingPage(){
    
    return(
        <div className='divLanding'>
            <h1 className='h1landing'>Bienvenidos al SDGA Tour!</h1>
            <Login/>
            <h5 className='h5Landing'>
                No tenes cuenta? <Link to='/register' className='LinkLanding'>Registrate GIL</Link>
            </h5>
        </div>
    );
};