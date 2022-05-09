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
        else if(!input.date){
            errors.date = 'Debes ingresar la fecha en la que jugaste esta tarjeta'
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
        else if(!input.date){
            alert('Debes ingresar la fecha en la que jugaste esta tarjeta')
        }
        else if(input.matricula.length < 5 || input.matricula.length > 6){
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
            <div className='divForm'>
                <form onSubmit={e => onSubmit(e)} className='formLoad'>
                    <div className='input'>
                        <b>Ida:</b>
                        <input 
                        type='number'
                        name='front_nine'
                        placeholder='ej: 40'
                        value={input.front_nine}
                        onChange={e => handleChange(e)}
                        className='inputs'
                        />
                    </div>
                    <div className='input'>
                        <b>Vuelta:</b>
                        <input 
                        type='number'
                        name='back_nine'
                        placeholder='ej: 40'
                        value={input.back_nine}
                        onChange={e => handleChange(e)}
                        className='inputs'/>
                    </div>
                    <div className='input'>
                        <b>Fecha:</b>
                        <input
                        type='date'
                        name='date'
                        placeholder='ej: 13-03-2022'
                        value={input.date}
                        onChange={e => handleChange(e)}
                        className='inputs'/>
                    </div>
                    <div className='input'>
                        <b>Handicap:</b>
                        <input
                        type='number'
                        name='handicap'
                        placeholder='ej: 12'
                        value={input.handicap}
                        onChange={e => handleChange(e)}
                        className='inputs'/>
                    </div>
                    <div className='input'>
                        <b>Matrícula:</b>
                        <input
                        type='number'
                        name='matricula'
                        placeholder='ej: 117547'
                        value={input.matricula}
                        onChange={e => handleChange(e)}
                        className='inputs'/>
                    </div>
                    <div className='input'>
                        <b>Categoría:</b>
                        <select
                        type='select'
                        name='categoria'
                        placeholder='ej: 117547'
                        value={input.categoria}
                        onChange={e => handleChange(e)}
                        className='inputs'>
                            <option value="Empty"></option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>
                    <div className='divButtons'>
                        <div>
                            <button className='BTNLoad'>Presentar</button>
                        </div>
                        <div>
                            <Link to='/home'>
                                <button className='BTNLoad'>Volver</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};