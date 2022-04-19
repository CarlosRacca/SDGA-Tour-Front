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
                    name='email'
                    className='mail'
                    {...register('email', {
                        required: {value: true, message: 'Completar Email'}
                    })}
                    />
                    <span className='text-danger text-small d-block mb-2'>
                        {errors?.email?.message}
                    </span>
                </label>
                <label>
                    Contraseña:
                    <input 
                    type='password'
                    name='password'
                    className= 'contraseña'
                    {...register('password', {
                        required: {value: true, message: 'Completar Contraseña'}
                    })}
                    />
                    <span className='text-danger text-small d-block mb-2'>
                        {errors?.password?.message}
                    </span>
                </label>
                <button>Ingresar</button>
            </form>
        </div>
    );
};