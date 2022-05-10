import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import '../Styles/Home.modules.css'
import { Link } from 'react-router-dom';
import { getScoresUser } from "../Actions/index";
import '../Styles/Users.modules.css';

export default function Users(){

    const dispatch = useDispatch();
    const scores = useSelector(state => state.scoresUser);

    useEffect(() => {
        dispatch(getScoresUser());
    }, [dispatch]);

    return(
        <div className='divU'>
            <h1 className='title'>JUGADORES</h1>
            <div>
                <Link to='/home'>
                    <button className='btnU'>ATRAS</button>
                </Link>
            </div>
            <div className='users'>
                {scores ? scores.map(el => {
                    return(
                        <a href={`https://sdga-tour.com/users/${el.id}`} >
                            <div key={el.id} className='player'>{el.user}</div>
                        </a>
                        )
                    }) : 
                    <div></div>
                }
            </div>
        </div>
    );
};