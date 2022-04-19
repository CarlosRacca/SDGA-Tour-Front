import React from "react";
import {Link} from 'react-router-dom';

export default function Login(){
    return(
        <div>
            <form>
                <label>
                    Email:
                    <input type='text'></input>
                </label>
                <label>
                    Contraseña:
                    <input type='text'></input>
                </label>
                <Link to='/home'>
                    <button>Ingresar</button>
                </Link>
            </form>
        </div>
    )
}