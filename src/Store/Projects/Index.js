import {createStore, combineReducers} from  'redux';
import CreateReducer from './Reducers/CreateReducer';


const rootReducer=combineReducers({
    Add: CreateReducer
})

const appStore = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
   export default appStore;