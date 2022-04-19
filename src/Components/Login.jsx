import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function Login(){

    const { register, errors, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
        navigate('/home');
    };

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email:
                    <input 
                    type='text'
                    />
                </label>
                <label>
                    Contraseña:
                    <input 
                    type='password'
                    />
                </label>
                <button>Ingresar</button>
            </form>
        </div>
    );
};