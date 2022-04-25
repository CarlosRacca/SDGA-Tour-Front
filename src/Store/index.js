// import {configureStore} from '@reduxjs/toolkit'
// import rootReducer from '../Reducer';

// export const store = configureStore({
//     reducer: {rootReducer}
// });

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));