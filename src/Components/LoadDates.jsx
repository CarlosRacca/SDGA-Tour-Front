import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { postDate } from "../Actions";
import { Link } from "react-router-dom";
import '../Styles/Dates.modules.css'

export default function LoadDates(){
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        day: '',
        month: '',
        year: '',
        exceptional: false
    });

    function validate(input){
        let errors = {};
        if(input.day[0] === 0 || input.day.length === 0 || input.day < 1 || input.day > 31){
            errors.day = 'Debes ingresar un día valido'
        }
        if(input.month[0] === 0 || input.month.length === 0 || input.month < 1 || input.month > 12){
            errors.month = 'Debes ingresar un mes valido'
        }
        if(input.year.length !== 4){
            errors.year = 'Debes ingresar un año valido'
        }
        
        return errors
    };

    function onSubmit(e){
        if(input.day[0] === 0 || input.day.length === 0 || input.day < 1 || input.day > 31){
            alert('Debes ingresar un día valido')
        }
        else if(input.month[0] === 0 || input.month.length === 0 || input.month < 1 || input.month > 12){
            alert('Debes ingresar un mes valido')
        }
        else if(input.year.length !== 4){
            alert('Debes ingresar un año valido')
        }
        
        else{
            e.preventDefault();
            dispatch(postDate(input))
            alert(`La fecha ${input.day}/${input.month}/${input.year} ha sido cargada con exito!`)
            setInput({
                day: '',
                month: '',
                year: '',
                exceptional: false
            })
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
        <div className='divDates'>
            <h1 className='h1Dates'>Carga de Fechas</h1>
            <div className='divFormDates'>
                <form onSubmit={e => onSubmit(e)}>
                    <div>
                        Día:
                        <input 
                        type='text'
                        name='day'
                        placeholder='ej: 3'
                        value={input.day}
                        onChange={e => handleChange(e)}
                        className='inputDates'
                        />
                    </div>
                    <div>
                        Mes:
                        <input 
                        type='text'
                        name='month'
                        placeholder='ej: 5'
                        value={input.month}
                        onChange={e => handleChange(e)}
                        className='inputDates'/>
                    </div>
                    <div>
                        Año:
                        <input
                        type='text'
                        name='year'
                        placeholder='ej: 2022'
                        value={input.year}
                        onChange={e => handleChange(e)}
                        className='inputDates'/>
                    </div>
                    <div>
                        Fecha excepcional:
                        <select
                        type='select'
                        name='exceptional'
                        value={input.exceptional}
                        onChange={e => handleChange(e)}
                        className='inputDates'>
                            <option value="False">No</option>
                            <option value="True">Si</option>
                        </select>
                    </div>
                    <div className='divButtons'>
                        <button className='buttonDate'>Presentar</button>
                        <Link to='/home'>
                            <button className='buttonDate'>Volver</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}