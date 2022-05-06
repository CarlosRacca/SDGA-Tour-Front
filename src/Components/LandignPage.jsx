import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from "../Actions";
import { Link } from 'react-router-dom';
import '../Styles/LandingPage.modules.css';


export default function LandingPage(){
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const users = useSelector(state => state.users);

    function validate(input){
        let errors = {};
        if(!input.email){
            errors.email = 'Debes ingresar el mail con el que te registrarte para poder ingresar'
        }
        else if(!input.password){
            errors.password = 'Debes ingresar la contraseña con la que te registraste para ingresar'
        }
        return errors
    }

    function onSubmit(e){
        let login = false

        if(input.email.length < 3){
            alert('Debes ingresar el mail con el que te registrarte para poder ingresar')
        }
        else if(input.password.length < 3 ){
            alert('Debes ingresar la contraseña con la que te registraste para ingresar')
        }
     
        else{
            e.preventDefault();
            if(login === false){
                users.forEach(el => {
                    if(el.email === input.email && el.password === input.password){
                        login = true
                        alert(`Bienvenido ${el.name}`)
                        setInput({
                            email: '',
                            password: ''
                        })
                        navigate('/home')
                    }
                })
            }
            if( login === false){
                alert('Email y/o contraseña son incorrectos')
            }
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
        <div className='divLanding'>
            <h1 className='h1landing'>Bienvenidos al SDGA Tour!</h1>
                <div className='divForm'>
                    <form onSubmit={e => onSubmit(e)} className='formLogIn'>
                        <label className='labelMail'>
                            <input 
                            type='text'
                            name='email'
                            className='inputLogin'
                            placeholder='Email'
                            onChange={e => handleChange(e)}
                            />
                        </label>
                        <label>
                            <input 
                            type='password'
                            name='password'
                            className= 'inputLogin'
                            placeholder='Contraseña'
                            onChange={e => handleChange(e)}
                            />
                        </label>
                        <button className='btnLogin'>Ingresar</button>
                    </form>
                </div>
            <h5 className='h5Landing'>
                No tenes cuenta? <Link to='/register' className='LinkLanding'>Registrate</Link>
            </h5>
        </div>
    );
};