import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { postScore } from "../Actions";
import '../Styles/LoadScoreCard.modules.css';

export default function LoadScoreCard(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        front_nine: '',
        back_nine: '',
        handicap: '',
        date: '',
        matricula: '',
        categoria: ''
    })

    function validate(input){
        let errors = {};
        if(input.front_nine < 25){
            errors.front_nine = 'Debes ingresar el score gross de los primeros 9 hoyos'
        }
        else if(input.back_nine < 25){
            errors.back_nine = 'Debes ingresar el score gross de los segundos 9 hoyos'
        }
        else if(!input.handicap){
            errors.handicap = 'Debes ingresar el handicap que tuviste el dia en que se jugo esta tarjeta y correspondiente al tee de donde jugaste'
        }
        else if(input.matricula.length < 4){
            errors.matricula = 'Debes ingresar tu numero de matrícula'
        }
        else if(input.categoria.length < 1){
            errors.matricula = 'Debes ingresar la categoría en la que estas actualmente'
        }
        
        return errors
    }

    function onSubmit(e){
        if(input.front_nine < 25){
            alert('Debes ingresar el score gross de los primeros 9 hoyos')
        }
        else if(input.back_nine < 25){
            alert('Debes ingresar el score gross de los segundos 9 hoyos')
        }
        else if(!input.handicap){
            alert('Debes ingresar el handicap que tuviste el dia en que se jugo esta tarjeta y correspondiente al tee de donde jugaste')
        }
        else if(input.matricula.length < 4){
            alert('Debes ingresar tu numero de matrícula')
        }
        else if(input.categoria.length < 1){
            alert('Debes ingresar la categoría en la que estas actualmente')
        }
        
        else{
            e.preventDefault();
            dispatch(postScore(input))
            alert('La tarjeta ha sido cargada con exito!')
            setInput({
                front_nine: '',
                back_nine: '',
                handicap: '',
                date: '',
                matricula: '',
                categoria: ''
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
        <div className='divLoad'>
            <h1 className='H1'>CARGA DE TARJETA</h1>
            <form onSubmit={e => onSubmit(e)} className='formLoad'>
                <div className='inputFront'>
                    Ida:
                    <input 
                    type='number'
                    name='front_nine'
                    placeholder='ej: 40'
                    value={input.front_nine}
                    onChange={e => handleChange(e)}
                    className='front_nine'
                    />
                </div>
                <div>
                    Vuelta:
                    <input 
                    type='number'
                    name='back_nine'
                    placeholder='ej: 40'
                    value={input.back_nine}
                    onChange={e => handleChange(e)}
                    className='back_nine'/>
                </div>
                <div>
                    Fecha:
                    <input
                    type='text'
                    name='date'
                    placeholder='ej: 13-03-2022'
                    value={input.date}
                    onChange={e => handleChange(e)}
                    className='date'/>
                </div>
                <div>
                    Handicap:
                    <input
                    type='number'
                    name='handicap'
                    placeholder='ej: 12'
                    value={input.handicap}
                    onChange={e => handleChange(e)}
                    className='handicap'/>
                </div>
                <div>
                    Matrícula:
                    <input
                    type='number'
                    name='matricula'
                    placeholder='ej: 117547'
                    value={input.matricula}
                    onChange={e => handleChange(e)}
                    className='matricula'/>
                </div>
                <div>
                    Categoría:
                    <select
                    type='select'
                    name='categoria'
                    placeholder='ej: 117547'
                    value={input.categoria}
                    onChange={e => handleChange(e)}
                    className='categoria'>
                        <option value="Empty"></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                </div>
                <button className='BTNLoad'>Presentar Tarjeta</button>
                <Link to='/home'>
                    <button className='BTNLoad'>Volver</button>
                </Link>
            </form>
        </div>
    );
};