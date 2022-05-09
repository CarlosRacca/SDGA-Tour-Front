import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import '../Styles/Home.modules.css'
import { Link } from 'react-router-dom';
import { getScoresUser } from "../Actions/index";

export default function Users(){

    const dispatch = useDispatch();
    const scores = useSelector(state => state.scoresUser)

    useEffect(() => {
        dispatch(getScoresUser())
    }, [dispatch])

    return(
        <div>
            <div>
                {scores ? scores.map(el => {
                    return(
                        <Link to={`/users/${el.id}`}>
                            <div key={el.id}>{el.user}</div>
                        </Link>
                        )
                    }) : 
                    <div></div>
                }
            </div>
            <div>
                <Link to='/home'>
                    <button>Volver</button>
                </Link>
            </div>
        </div>
    )
}