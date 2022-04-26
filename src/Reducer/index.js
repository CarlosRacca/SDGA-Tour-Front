
const initialState = {
    scores: [],
    users: [],
    scoresUser: [],
    dates: []
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            };

        case 'GET_SCORES':
            return {
                ...state,
                scores: action.payload
            };

        case 'GET_SCORES_USER':
            return {
                ...state,
                scoresUser: action.payload
            };
        
        case 'GET_DATES':
            return {
                ...state,
                dates: action.payload
            }

        case 'POST_DATE':
            return {
                ...state
            }

        case 'POST_USER':
            return {
                ...state,
            };

        case 'POST_SCORE':
            return {
                ...state,
            };
            
        default:
            return state;
    
    };
    
};

export default rootReducer;