// import React from "react";

// const ADD = 'ADD'; //type 


// function AddProject(id) {
//   return {
//     type: ADD,
//     payload: id
//   };
// } //action

// //const CreateAction={ADD, AddProject};
// export default CreateAction;
import React from 'react'
// const redux = require('redux')
// import { Add } from './Types'
// import axios from 'axios'


// export const createResource = (data) => {
//   return (dispatch) => {
//     return fetch('/api/resources', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(resource => {
//       dispatch({ type: 'CREATE_RESOURCE_SUCCESS', payload: resource })
//     })
//     .catch(error => {
//       dispatch({ type: 'CREATE_RESOURCE_FAILURE', payload: error })
//     })
//   }
// }

// export const Add  = ()=>{
//   return async (dispatch)=>{

//       const response = await axios.post(
//           'https://6429847d5a40b82da4d494b2.mockapi.io/PAM');
//       const data = await response.json();

//       // Dispatching the action when async
//       // action has completed.
//       dispatch({
//           type : 'ADD_DATA',
//           payload : data
//       });
//   }
// }




// // export const CreateAction = () => {
// //   const [state, dispatch] = useReducer(reducer, )

// //   return (
// //     <div>CreateAction</div>
// //   )
// // }


// const fetchTodos = () => dispatch => {
//   dispatch({ type: 'REQUEST' });
//   return fetch('https://6429847d5a40b82da4d494b2.mockapi.io/PAM')
//     .then(response => response.json())
//     .then(data => {
//       dispatch({
//         type: 'SUCCESS',
//         payload: data
//       });
//     })
//     .catch(error => {
//       dispatch({
//         type: 'FAILURE',
//         payload: error.message
//       });
//     });
// };
import React from 'react';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import {applyMiddleware } from 'redux';
import { REQUEST } from './Types';
import { SUCCESS } from './Types';
import { FAIL } from './Types';
import axios from 'axios';


const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState={
  loading : false,
  users: [],
  error: ''
}



const fetchRequest = () => {
  return{
    type: REQUEST
  }
}

const fetchSuccess = () => {
  return{
    type: SUCCESS,
    payload: users
  }
}

const fetchFail = () => {
  return{
    type: FAIL,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case REQUEST:
      return{
        ...state,
        loading: true
      }
    case SUCCESS:
      return{
        loading: false,
        users: action.payload,
        error: ''
      }
    case FAIL:
      return{
        loading: false,
        users: [],
        error: action.payload
      }
  }
}


const fetchUsers = () => {
  return function(dispatch){
    dispatch(fetchRequest())
    axios.post('https://6429847d5a40b82da4d494b2.mockapi.io/PAM')
      .then(response => {
        const users = response.data
        dispatch(fetchSuccess(ProjectName))
        console.log("name", ProjectName)

      })
      .catch(error => {
        dispatch(fetchFail(error.message))
      })        
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))


