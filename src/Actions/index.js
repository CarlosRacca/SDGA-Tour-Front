import axios from 'axios';


export function getScores(){

    return async function(dispatch){
        
        let allScores = await axios.get('https://sdga-tour.herokuapp.com/scores')

        let scores = allScores.data.map(el => el)

        return dispatch({
            type: 'GET_SCORES', 
            payload: scores
        })
    }
}

export function getUsers(){

    return async function(dispatch){
        
        let allUsers = await axios.get('https://sdga-tour.herokuapp.com/users')

        let users = allUsers.data.map(el => el)

        return dispatch({
            type: 'GET_USERS',
            payload: users.data
        })
    }
}

export function postScore(payload){

    return async function(dispatch){

        const response = await axios.post('https://sdga-tour.herokuapp.com/score', payload)

        return response
    }
}

export function postUser(payload){

    return async function(dispatch){

        const response = await axios.post('https://sdga-tour.herokuapp.com/user', payload)

        return response
    }
}