import React from "react";
import {Link} from 'react-router-dom';

export default function Register(){
    return(
        <div>
            <form>
                <label>
                    Nombre:
                    <input type='text'></input>
                </label>
                <label>
                    Apellido:
                    <input type='text'></input>
                </label>
                <label>
                    Email:
                    <input type='text'></input>
                </label>
                <label>
                    Contraseña:
                    <input type='text'></input>
                </label>
                <label>
                    Matrícula:
                    <input type='text'></input>
                </label>
                
                <Link to='/ingreso'>
                    <button>Registrarse</button>
                </Link>
            </form>
        </div>
    )
}