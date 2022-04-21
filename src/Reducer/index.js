
const initialState = {
    scores: [],
    users: [],
    algo: 'as'
};

function rootReducer(state = initialState, action){
    switch(action.type){
        default:
            return state;

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

        case 'POST_USER':
            return {
                ...state,
            };

        case 'POST_SCORE':
            return {
                ...state,
            };
    };
    
};

export default rootReducer;