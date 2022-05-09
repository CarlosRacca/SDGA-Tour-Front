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

export function getScoresUser(){

    return async function(dispatch){
        
        let allScores = await axios.get('https://sdga-tour.herokuapp.com/scoresUser')

        let scores = allScores.data.map(el => el)

        return dispatch({
            type: 'GET_SCORES_USER',
            payload: scores
        })
    }
}

export function getSpecificDates(month, year){

    return async function(dispatch){

        let allDates =  await axios.get(`https://sdga-tour.herokuapp.com/dates/${month}/${year}`)

        let dates = allDates.data
        
        return dispatch({
            type: 'GET_SPECIFIC_DATES',
            payload: dates
        })
    }
}

export function getDates(){

    return async function(dispatch){

        let allDates = await axios.get('https://sdga-tour.herokuapp.com/dates')

        let dates = allDates.data

        return dispatch({
            type: 'GET_DATES',
            payload: dates
        })
    }
}

export function getUsers(){

    return async function(dispatch){
        
        let allUsers = await axios.get('https://sdga-tour.herokuapp.com/users')

        let users = allUsers.data.map(el => el)

        return dispatch({
            type: 'GET_USERS',
            payload: users
        })
    }
}

export function postDate(payload){

    return async function(dispatch){

        const response = await axios.post('https://sdga-tour.herokuapp.com/date', payload)

        return response
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

export function deleteScoreCard(id_score){

    return async function(dispatch){
        try {
            const scoreDelete = await axios.delete(`https://sdga-tour.herokuapp.com/score/${id_score}`)

            return dispatch({
                type: 'DELETE_SCORE',
                payload: scoreDelete.data
            })
        } catch (error) {
            console.log('Error')
        }
    }
}