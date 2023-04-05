import React from "react";

const ADD = 'ADD'; //type 


function AddProject(id) {
  return {
    type: ADD,
    payload: id
  };
} //action

//const CreateAction={ADD, AddProject};
export default CreateAction;

