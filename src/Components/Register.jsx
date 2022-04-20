import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { postUser } from '../Actions/index'

export default function Register(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        matricula: 0
    })

    function validate(input){
        let errors = {};
        if(!input.name.match(/^[A-Za-z0-9_\s]+$/)){
            errors.name = 'Debes ingresar tu nombre';
        }
        else if(!input.lastname){
            errors.lastname = 'Debes ingresar tu apellido'
        }
        else if(!input.email){
            errors.email = 'Debes ingresar tu email'
        }
        else if(!input.password){
            errors.password = 'Debes ingresar una contraseña'
        }
        else if(input.matricula < 1){
            errors.matricula = 'Debes ingresar tu numero de matrícula'
        }
        
        return errors
    }

    function onSubmit(e){
        if(input.name.length < 3){
            alert('Completa tu nombre antes de registrarte')
        }
        else if(input.lastname.length < 3){
            alert('Completa tu apellido antes de registrarte')
        }
        else if(input.email.length < 3){
            alert('Completa tu email antes de registrarte')
        }
        else if(input.password.length < 3 ){
            alert('Completa tu contraseña antes de registrarte')
        }
        else if(input.matricula.length < 5){
            alert('Completa tu matricula antes de registrarte')
        }
        
        else{
            e.preventDefault();
            dispatch(postUser(input))
            alert('El usuario ha sido creado con exito!')
            setInput({
                name: '',
                lastname: '',
                email: '',
                password: '',
                matricula: 0
            })
            navigate('/home')
        }
    }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    return(
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    Nombre:
                    <input 
                    type='text'
                    name='name'
                    value={input.name}
                    onChange={e => handleChange(e)}
                    className='nombre'
                    />
                </div>
                <div>
                    Apellido:
                    <input 
                    type='text'
                    name='lastname'
                    value={input.lastname}
                    onChange={e => handleChange(e)}
                    className='apellido'
                    />
                </div>
                <div>
                    Email:
                    <input 
                    type='text'
                    name='email'
                    value={input.email}
                    onChange={e => handleChange(e)}
                    className='mail'
                    />
                </div>
                <div>
                    Contraseña:
                    <input 
                    type='password'
                    name='password'
                    value={input.password}
                    onChange={e => handleChange(e)}
                    className='contraseña'
                    />
                </div>
                <div>
                    Matrícula:
                    <input 
                    type='number'
                    name='matricula'
                    value={input.matricula}
                    onChange={e => handleChange(e)}
                    className='matricula'
                    />
                </div>
                <button>Registrarse</button>
            </form>
        </div>
    );
};