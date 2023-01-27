import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "../../lib/reducer";
import { initialState } from "../../lib/Store";

const Bmi = createContext();

const BmiContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Bmi.Provider value={{ dispatch, state }}>{children}</Bmi.Provider>;
};

export default BmiContext;

export const ContextBmi = () => {
  return useContext(Bmi);
};
