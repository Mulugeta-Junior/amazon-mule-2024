import React, { createContext, useReducer, Children } from "react";

export const DataContext = createContext(); //context created

export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};
