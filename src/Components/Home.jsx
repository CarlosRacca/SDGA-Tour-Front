import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import '../Styles/Home.modules.css'
import { Link } from 'react-router-dom';
import { getScores, getUsers, getScoresUser, getDates } from "../Actions/index";


export default function Home(){

    const dispatch = useDispatch();

    let date = new Date();
    let month = String(date.getMonth() + 1).padStart(2, '0')
    let year =  date.getFullYear();
    
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getScores())
        dispatch(getScoresUser())
        dispatch(getDates(month, year))
    }, [dispatch])

    const users = useSelector(state => state.users);
    const dates = useSelector(state => state.dates);
    const scoresUser = useSelector(state => state.scoresUser);

    function orderByScoresTotal(){
        scoresUser.forEach(el => {
            if(el.scores.length >= 3){
                el.sum = []
                el.scores.sort((a, b) => a.totalNeto - b.totalNeto)
                el.scores.forEach(score => {
                    if(el.scores.indexOf(score) === 0){
                        el.sum.push(score.totalNeto)
                    }
                    if(el.scores.indexOf(score) === 1){
                        el.sum.push(score.totalNeto)
                    }
                    if(el.scores.indexOf(score) === el.scores.length - 1){
                        el.sum.push(score.totalNeto)
                    }
                })

                el.total = [el.sum[0] + el.sum[1] + el.sum[2]]
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

    function bestScore(){

    }

    return(
        <main className='mainH'>
            <h1 className='h1H'>SDGA TOUR</h1>
            <Link to='/loadscorecard'>
                <button className='button'>Cargar tarjeta</button>
            </Link>
            <h5 className='h5H'>PLANILLA DE SCORES NETO: {numberToMonth(month)} {year}</h5>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Jugador</th>
                            {
                            dates ? dates.map(el => {
                                return(
                                    <th>
                                        {`${el.day}/${el.month}`}
                                    </th>
                                )
                            }) :
                            <div>Cargando</div>
                        }
                            <th>M1</th>
                            <th>M2</th>
                            <th>P</th>
                            <th>SUM</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr className='trA'>
                            <th>A</th>
                        </tr>
                        {
                            orderByScoresTotal()
                        }
                        {   
                            scoresUser ? scoresUser.map(el => {
                                var sum = []
                                if(el.scores[0].categoria === "A"){
                                return(
                                <tr>
                                    <td>{el.user}</td>
                                    {
                                    dates ? dates.map(date => {
                                        return(
                                            <td>{
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
                                        }) : 
                                        <td></td>   
                                    }
                                    
                                    {
                                        el.scores ? el.scores.sort((a,b) => b.totalNeto - a.totalNeto).slice(-1).map(elem => {
                                            return(
                                                <td>{elem.totalNeto}</td>
                                            )
                                        })
                                        : 
                                        <td></td>
                                    }
                                    {
                                        el.scores ? el.scores.sort((a,b) => b.totalNeto - a.totalNeto).slice(-2).sort((a,b) => a.totalNeto - b.totalNeto).slice(-1).map(elem => {
                                            if(el.scores.length > 1){
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
                                        el.scores ? el.scores.sort((a,b) => a.totalNeto - b.totalNeto).slice(-1).map(elem => {
                                            if(el.scores.length > 2){
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
                                        el.scores ? el.scores.sort((a,b) => a.totalNeto - b.totalNeto).map(elem => {
                                            
                                            if(el.scores.length > 2){
                                                if(el.scores.indexOf(elem) === 0){
                                                    sum.push(elem.totalNeto)

                                                    return 
                                                }
                                                else if(el.scores.indexOf(elem) === 1){
                                                    sum.push(elem.totalNeto)

                                                    return 
                                                }
                                                else if(el.scores.indexOf(elem) === el.scores.length -1){
                                                    sum.push(elem.totalNeto)

                                                    return(
                                                        <td>{sum[0] + sum [1] + sum[2]}</td>
                                                        
                                                    )
                                                }
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
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Jugador</th>
                            {
                            dates ? dates.map(el => {
                                return(
                                    <th>
                                        {`${el.day}/${el.month}`}
                                    </th>
                                )
                            }) :
                            <div>Cargando</div>
                        }
                            <th>M1</th>
                            <th>M2</th>
                            <th>P</th>
                            <th>SUM</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr className='trA'>
                            <th>B</th>
                        </tr>
                        {
                            
                            scoresUser ? scoresUser.map(el => {
                                var sum = []
                                if(el.scores[0].categoria === "B"){
                                return(
                                <tr>
                                    <td>{el.user}</td>
                                    {
                                    dates ? dates.map(date => {
                                        return(
                                            <td>{
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
                                        }) : 
                                        <td></td>   
                                    }
                                    
                                    {
                                        el.scores ? el.scores.sort((a,b) => b.totalNeto - a.totalNeto).slice(-1).map(elem => {
                                            return(
                                                <td>{elem.totalNeto}</td>
                                            )
                                        })
                                        : 
                                        <td></td>
                                    }
                                    {
                                        el.scores ? el.scores.sort((a,b) => b.totalNeto - a.totalNeto).slice(-2).sort((a,b) => a.totalNeto - b.totalNeto).slice(-1).map(elem => {
                                            if(el.scores.length > 1){
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
                                        el.scores ? el.scores.sort((a,b) => a.totalNeto - b.totalNeto).slice(-1).map(elem => {
                                            if(el.scores.length > 2){
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
                                        el.scores ? el.scores.sort((a,b) => a.totalNeto - b.totalNeto).map(elem => {
                                            
                                            if(el.scores.length > 2){
                                                if(el.scores.indexOf(elem) === 0){
                                                    sum.push(elem.totalNeto)

                                                    return 
                                                }
                                                else if(el.scores.indexOf(elem) === 1){
                                                    sum.push(elem.totalNeto)

                                                    return 
                                                }
                                                else if(el.scores.indexOf(elem) === el.scores.length -1){
                                                    sum.push(elem.totalNeto)

                                                    return(
                                                        <td>{sum[0] + sum [1] + sum[2]}</td>
                                                        
                                                    )
                                                }
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