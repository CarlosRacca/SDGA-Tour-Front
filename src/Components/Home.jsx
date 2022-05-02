import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import '../Styles/Home.modules.css'
import { Link } from 'react-router-dom';
import { getScores, getUsers, getScoresUser, getDates } from "../Actions/index";


export default function Home(){
    let date = new Date();
    let year =  date.getFullYear();

    const dispatch = useDispatch();
    const [month, setMonth] = useState(String(date.getMonth() + 1).padStart(2, '0'))

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getScores())
        dispatch(getScoresUser())
        dispatch(getDates())
    }, [dispatch])

    let dates = useSelector(state => state.dates);
    const scoresUser = useSelector(state => state.scoresUser);

    

    function orderByScoresTotal(){
        scoresUser.forEach(el => {
            const scoresFiltered = el.scores.filter(elem => elem.month === month)
            if(scoresFiltered.length >= 3){
                el.sum = []
                scoresFiltered.sort((a, b) => a.totalNeto - b.totalNeto)
                scoresFiltered.forEach(score => {
                    if(scoresFiltered.indexOf(score) === 0){
                        el.sum.push(score.totalNeto)
                    }
                    if(scoresFiltered.indexOf(score) === 1){
                        el.sum.push(score.totalNeto)
                    }
                    if(scoresFiltered.indexOf(score) === scoresFiltered.length - 1){
                        el.sum.push(score.totalNeto)
                    }
                })

                el.total = [el.sum[0] + el.sum[1] + el.sum[2]]
            }
            else{
                el.total = ['Faltan cargar tarjetas!']
            }
        })

        scoresUser.sort((a,b) => a.total - b.total)
    }

    function numberToMonth(month){
        if(month === '01'){
            return "ENERO"
        }
        else if(month ==='02'){
            return 'FEBRERO'
        }
        else if(month === '03'){
            return 'MARZO'
        }
        else if(month === '04'){
            return 'ABRIL'
        }
        else if(month === '05'){
            return 'MAYO'
        }
        else if(month === '06'){
            return 'JUNIO'
        }
        else if(month === '07'){
            return 'JULIO'
        }
        else if(month === '08'){
            return 'AGOSTO'
        }
        else if(month === '09'){
            return 'SEPTIEMBRE'
        }
        else if(month === '10'){
            return 'OCTUBRE'
        }
        else if(month === '11'){
            return 'NOVIEMBRE'
        }
        else{
            return 'DICIEMBRE'
        }
    }
  
    function handleSelectMonth(e){
        setMonth(e.target.value)
    }

    function filterDatesByMonth(){
        let datesFil = dates.filter(el => el.month == month)

        dates = datesFil
    }

    return(
        <main className='mainH'>
            <h1 className='h1H'>LEADERBOARD</h1>
            
            <div className='divButton'>
            <Link to='/loadscorecard'>
                    <button className='button'>Cargar tarjeta</button>
                </Link>
            <h5 className='h5H'>
                PLANILLA DE SCORES NETO: 
                <select className='selectMonth' onChange={e => handleSelectMonth(e)}>
                    <option value={String(date.getMonth() + 1).padStart(2, '0')}>Actual: {numberToMonth(String(date.getMonth() + 1).padStart(2, '0'))}</option>
                    <option value={'01'}>{numberToMonth('01')}</option>
                    <option value='02'>{numberToMonth('02')}</option>
                    <option value='03'>{numberToMonth('03')}</option>
                    <option value='04'>{numberToMonth('04')}</option>
                    <option value='05'>{numberToMonth('05')}</option>
                    <option value='06'>{numberToMonth('06')}</option>
                    <option value='07'>{numberToMonth('07')}</option>
                    <option value='08'>{numberToMonth('08')}</option>
                    <option value='09'>{numberToMonth('09')}</option>
                    <option value='10'>{numberToMonth('10')}</option>
                    <option value='11'>{numberToMonth('11')}</option>
                    <option value='12'>{numberToMonth('12')}</option>
                </select> {year}
            </h5>
                
                <Link to='/rules'>
                    <button className='button'>Reglas del torneo</button>
                </Link>
            </div>
            <h5 className='tableTitle'>Categoría A</h5>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Jugador</th>
                            {
                                filterDatesByMonth()
                            }
                            {
                            dates ? dates.map(el => {
                                if(el.exceptional === false){
                                    return(
                                        <th className='normalDate'>
                                            {`${el.day}/${el.month}`}
                                        </th>
                                    )
                                }
                                else{
                                    return(
                                        <th className='exceptionalDate'>
                                            {`${el.day}/${el.month}`}
                                        </th>
                                    )
                                }
                            }) :
                            <div>Cargando</div>
                        }
                            <th className='normalDate'>M1</th>
                            <th className='normalDate'>M2</th>
                            <th className='normalDate'>P</th>
                            <th className='normalDate'>SUM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderByScoresTotal()
                        }
                        {   
                            scoresUser ? scoresUser.map(el => {
                                const scoresFiltered = el.scores.filter(elem => elem.month === month)

                                if(el.scores[0].categoria === "A"){
                                return(
                                <tr>
                                    <td>{el.user}</td>
                                    {
                                    dates ? dates.map(date => {
                                        if(date.exceptional === false){
                                            return(
                                                <td className='normalDate'>{
                                                    el.scores ? el.scores.filter(elem => 
                                                    elem.month === month
                                                ).sort((a ,b) => a.day - b.day).map(elem => {
                                                    if(elem.day == date.day){
                                                        return(
                                                            elem.totalNeto
                                                        )
                                                    }
                                                }) :
                                                <td>Cargando...</td>}</td>
                                                )
                                        }
                                        else{
                                            return(
                                                <td className='exceptionalDate'>{
                                                    el.scores ? el.scores.filter(elem => 
                                                    elem.month === month
                                                ).sort((a ,b) => a.day - b.day).map(elem => {
                                                    if(elem.day == date.day){
                                                        return(
                                                            elem.totalNeto
                                                        )
                                                    }
                                                }) :
                                                <td>Cargando...</td>}</td>
                                                )
                                        }
                                        }) : 
                                        <td></td>   
                                    }
                                    {
                                       scoresFiltered.length > 0 ? scoresFiltered.sort((a,b) => b.totalNeto - a.totalNeto).slice(-1).map(elem => {                                       
                                            return(
                                                <td>{elem.totalNeto}</td>
                                            )
                                        }) :
                                        <td></td>
                                    }
                                    {
                                        scoresFiltered.length > 0 ? scoresFiltered.sort((a,b) => b.totalNeto - a.totalNeto).slice(-2).sort((a,b) => a.totalNeto - b.totalNeto).slice(-1).map(elem => {
                                            if(scoresFiltered.length > 1){
                                                return(
                                                    <td>{elem.totalNeto}</td>
                                                )
                                            }
                                            else{
                                                return(
                                                    <td></td>
                                                )
                                            }
                                        }) :
                                        <td></td>
                                        
                                    }
                                    {
                                        scoresFiltered.length > 0 ? scoresFiltered.sort((a,b) => a.totalNeto - b.totalNeto).slice(-1).map(elem => {
                                            if(scoresFiltered.length > 2){
                                                return(
                                                    <td>{elem.totalNeto}</td>
                                                )
                                            }
                                            else{
                                                return(
                                                    <td></td>
                                                )
                                            }
                                        })
                                        : 
                                        <td></td>
                                    }
                                    {
                                        el.total ? el.total.map(total => {
                                            if(typeof total === "number"){
                                                
                                                return(
                                                    <td>{total}</td>
                                                )
                                            }
                                            else{
                                                
                                                return(
                                                    <td></td>
                                                )
                                            }
                                        }) :
                                        <td></td>
                                    } 
                                </tr>)
                                }
                            }) : 
                            <tr>
                                <td>Cargando...</td>
                            </tr>
                        }
                       
                    </tbody>
                    <tfoot></tfoot>
                </table>
                <h5 className='tableTitle'>
                    <div></div>
                    Categoría B
                    <div></div></h5>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Jugador</th>
                            {
                            dates ? dates.map(el => {
                                if(el.exceptional === false){
                                    return(
                                        <th className='normalDate'>
                                            {`${el.day}/${el.month}`}
                                        </th>
                                    )
                                }
                                else{
                                    return(
                                        <th className='exceptionalDate'>
                                            {`${el.day}/${el.month}`}
                                        </th>
                                    )
                                }
                            }) :
                            <div>Cargando</div>
                        }
                            <th className='normalDate'>M1</th>
                            <th className='normalDate'>M2</th>
                            <th className='normalDate'>P</th>
                            <th className='normalDate'>SUM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderByScoresTotal()
                        }
                        {   
                            scoresUser ? scoresUser.map(el => {
                                const scoresFiltered = el.scores.filter(elem => elem.month === month)

                                if(el.scores[0].categoria === "B"){
                                return(
                                <tr>
                                    <td>{el.user}</td>
                                    {
                                    dates ? dates.map(date => {
                                        if(date.exceptional === false){
                                            return(
                                                <td className='normalDate'>{
                                                    el.scores ? el.scores.filter(elem => 
                                                    elem.month === month
                                                ).sort((a ,b) => a.day - b.day).map(elem => {
                                                    if(elem.day == date.day){
                                                        return(
                                                            elem.totalNeto
                                                        )
                                                    }
                                                }) :
                                                <td>Cargando...</td>}</td>
                                                )
                                        }
                                        else{
                                            return(
                                                <td className='exceptionalDate'>{
                                                    el.scores ? el.scores.filter(elem => 
                                                    elem.month === month
                                                ).sort((a ,b) => a.day - b.day).map(elem => {
                                                    if(elem.day == date.day){
                                                        return(
                                                            elem.totalNeto
                                                        )
                                                    }
                                                }) :
                                                <td>Cargando...</td>}</td>
                                                )
                                        }
                                        }) : 
                                        <td></td>   
                                    }
                                    {
                                       scoresFiltered.length > 0 ? scoresFiltered.sort((a,b) => b.totalNeto - a.totalNeto).slice(-1).map(elem => {                                        
                                            return(
                                                <td>{elem.totalNeto}</td>
                                            )
                                        }) :
                                        <td></td>
                                    }
                                    {
                                        scoresFiltered.length > 0 ? scoresFiltered.sort((a,b) => b.totalNeto - a.totalNeto).slice(-2).sort((a,b) => a.totalNeto - b.totalNeto).slice(-1).map(elem => {
                                            if(scoresFiltered.length > 1){
                                                return(
                                                    <td>{elem.totalNeto}</td>
                                                )
                                            }
                                            else{
                                                return(
                                                    <td></td>
                                                )
                                            }
                                        }) :
                                        <td></td>
                                        
                                    }
                                    {
                                        scoresFiltered.length > 0 ? scoresFiltered.sort((a,b) => a.totalNeto - b.totalNeto).slice(-1).map(elem => {
                                            if(scoresFiltered.length > 2){
                                                return(
                                                    <td>{elem.totalNeto}</td>
                                                )
                                            }
                                            else{
                                                return(
                                                    <td></td>
                                                )
                                            }
                                        })
                                        : 
                                        <td></td>
                                    }
                                    {
                                        el.total ? el.total.map(total => {
                                            if(typeof total === "number"){
                                                
                                                return(
                                                    <td>{total}</td>
                                                )
                                            }
                                            else{
                                                
                                                return(
                                                    <td></td>
                                                )
                                            }
                                        }) :
                                        <td></td>
                                    } 
                                </tr>)
                                }
                            }) : 
                            <tr>
                                <td>Cargando...</td>
                            </tr>
                        }
                       
                    </tbody>
                    <tfoot></tfoot>
                </table>
        </main>
    );
};