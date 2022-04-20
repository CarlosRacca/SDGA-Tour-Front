import React from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

export default function Register(){

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
                    Nombre:
                    <input 
                    type='text'
                    name='name'
                    className='nombre'
                    {...register('name', {
                        required: {value: true, message: 'Completar Nombre'}
                    })}
                    />
                    <span className='text-danger text-small d-block mb-2'>
                        {errors?.name?.message}
                    </span>
                </label>
                <label>
                    Apellido:
                    <input 
                    type='text'
                    name='lastName'
                    className='apellido'
                    {...register('lastName', {
                        required: {value: true, message: 'Completar Apellido'}
                    })}
                    />
                    <span className='text-danger text-small d-block mb-2'>
                        {errors?.lastName?.message}
                    </span>
                </label>
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
                    className='contraseña'
                    {...register('password', {
                        required: {value: true, message: 'Completar Contraseña'}
                    })}
                    />
                    <span className='text-danger text-small d-block mb-2'>
                        {errors?.password?.message}
                    </span>
                </label>
                <label>
                    Matrícula:
                    <input 
                    type='text'
                    name='tuition'
                    className='matricula'
                    {...register('tuition', {
                            required: {value: true, message: 'Completar Matrícula'}
                        })}
                    />
                    <span className='text-danger text-small d-block mb-2'>
                        {errors?.tuition?.message}
                    </span>
                </label>
                <button>Registrarse</button>
            </form>
        </div>
    );
};