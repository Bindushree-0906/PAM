import React from "react";
import CreateAction from "../Actions/CreateAction";

const messageReducer = (state = [], action) => {
    switch (action.type) {
      case ADD:
        return [
          ...state,
          action.id
        ];
      default:
        return state;
    }
  };
  
  
  export default CreateReducer;
  
  
  
  
  
  
  