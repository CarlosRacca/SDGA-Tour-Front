import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../Styles/LogIn.modules.css';

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
            <form onSubmit={handleSubmit(onSubmit)} className='formLogIn'>
                <label className='labelMail'>
                    <input 
                    type='text'
                    name='email'
                    className='mail'
                    placeholder='Email'
                    {...register('email', {
                        required: {value: true, message: 'Completar Email'}
                    })}
                    />
                    <span className='text-danger text-small d-block mb-2'>
                        {errors?.email?.message}
                    </span>
                </label>
                <label>
                    <input 
                    type='password'
                    name='password'
                    className= 'contraseña'
                    placeholder='Contraseña'
                    {...register('password', {
                        required: {value: true, message: 'Completar Contraseña'}
                    })}
                    />
                    <span className='text-danger text-small d-block mb-2'>
                        {errors?.password?.message}
                    </span>
                </label>
                <button className='btnLogin'>Ingresar</button>
            </form>
        </div>
    );
};