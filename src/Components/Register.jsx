import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { postUser } from '../Actions/index'
import '../Styles/Register.modules.css'

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
        <div className='divR'>
            <h1 className='h1R'>SDGA TOUR</h1>
            <form className='formR' onSubmit={e => onSubmit(e)}>
                <div className='divFormR'>
                    
                    <input 
                    type='text'
                    name='name'
                    value={input.name}
                    onChange={e => handleChange(e)}
                    className='nombre'
                    placeholder='Nombre'
                    />
                </div>
                <div className='divFormR'>
                    
                    <input 
                    type='text'
                    name='lastname'
                    value={input.lastname}
                    onChange={e => handleChange(e)}
                    className='apellido'
                    placeholder='Apellido'
                    />
                </div>
                <div className='divFormR'>
                    
                    <input 
                    type='text'
                    name='email'
                    value={input.email}
                    onChange={e => handleChange(e)}
                    className='mail'
                    placeholder='Mail'
                    />
                </div>
                <div className='divFormR'>
                    
                    <input 
                    type='password'
                    name='password'
                    value={input.password}
                    onChange={e => handleChange(e)}
                    className='contraseña'
                    placeholder='Contraseña'
                    />
                </div>
                <div className='divFormR'>
                    <input 
                    type='number'
                    name='matricula'
                    value={input.matricula}
                    onChange={e => handleChange(e)}
                    className='matricula'
                    placeholder='Matrícula'
                    />
                </div>
                <button className='buttonR'>Registrarse</button>
                
                
            </form>
            <div className='divLoeguate'>
                Ya estás registrado?? <Link to='/' className='logueate'> Logueate</Link>
            </div>
        </div>
    );
};