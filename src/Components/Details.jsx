import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import '../Styles/Details.modules.css'
import { Link, useParams } from 'react-router-dom';
import { getScoresUser, deleteScoreCard } from "../Actions/index";


export default function Details(){

    const dispatch = useDispatch();
    let scores = useSelector(state => state.scoresUser)
    let scoresFiltered
    const {id} = useParams()

    useEffect(() => {
        dispatch(getScoresUser())
    }, [dispatch])

    function userFilter(){

        const scoresFiltered = scores.filter(el => el.id === id)

        scores = scoresFiltered
    }

    function handleDelete(e){
        e.preventDefault();
        let response = window.confirm('Estas seguro que queres eliminar esta tarjeta?')

        console.log(response)
        if(response === true){
            return dispatch(deleteScoreCard(e.target.value))
        }
        if(response === false){
            return
        }
    }

    function handleFiltered(e){
        
        const scoresMonth = scores[0].scores.filter(el => el.month === e.target.value) 

        scoresFiltered = scoresMonth

        console.log(scoresFiltered)

    }

    return(
        <div className='divDetails'>{userFilter()}
        {/* <form onChange={e => handleFiltered(e)}>
            Filtrar por mes:
            <select>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
            </select>
        </form> */}
        <h1 className='titleDetails'>Tarjetas de {scores[0] ? scores[0].user : ''}</h1>
            <div className='divCards'>
                
                {scores[0] ? scores[0].scores.map(el => {
                
                        return(
                            <label className='card' key={el.id} value={el.id}>
                                <div className='cardContent'><div>Fecha: </div><div>{el.day}/{el.month}/{el.year}</div></div>
                                <div className='cardContent'><div>Total Gross: </div><div>{el.totalGross}</div></div>
                                <div className='cardContent'><div>Handicap: </div><div>{el.handicap}</div></div>
                                <div className='cardContent'><div>Total Neto: </div><div>{el.totalNeto}</div></div>
                                <div className='cardContent'><div>Categoría: </div><div>{el.categoria}</div></div>
                                <button className='buttonCards' onClick={e => handleDelete(e)} value={el.id}>Eliminar</button>
                            </label>
                        )
                    }) : <div></div>}
            </div>
            <div className='divButton'>
                <Link to='/users'>
                    <button className='buttonDetails'>Volver</button>                    
                </Link>
                <Link to='/home'>
                    <button className='buttonDetails'>Volver al inicio</button>                    
                </Link>
            </div>
        </div>
    )
}