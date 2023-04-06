import { legacy_createStore as createStore} from 'redux'
import {applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import CreateReducer from './Projects/Reducers/CreateReducer'

const store= createStore(CreateReducer)


export default store