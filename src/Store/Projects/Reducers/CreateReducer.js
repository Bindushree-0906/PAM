import React from "react";
import CreateAction from "../Actions/CreateAction";
import { Add } from "../Actions/Types";

const messageReducer = (state = [], action) => {
    switch (action.type) {
      case Add:
        return [
          ...state,
          action.id
        ];
      default:
        return state;
    }
  };
  
  
  
  
  
  
  
  
  
  