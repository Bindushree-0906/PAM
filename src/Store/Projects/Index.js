import React from 'react';
import {createStore, combineReducers, applyMiddleware} from  'redux';
import CreateReducer from './Reducers/CreateReducer';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import rootReducer from './reducers';


const store = createStore(rootReducer, applyMiddleware(thunk));


const rootReducer=combineReducers({
    Add: CreateReducer
})

const appStore = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
   export default appStore;