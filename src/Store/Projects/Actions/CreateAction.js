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

export const CreateAction = () => {
  const [state, dispatch] = useReducer(reducer, )

  return (
    <div>CreateAction</div>
  )
}


const fetchTodos = () => dispatch => {
  dispatch({ type: 'REQUEST' });
  return fetch('https://6429847d5a40b82da4d494b2.mockapi.io/PAM')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SUCCESS',
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: 'FAILURE',
        payload: error.message
      });
    });
};

export default CreateAction
