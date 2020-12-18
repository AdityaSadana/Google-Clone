import React, { createContext, useContext, useReducer } from 'react';

// Preparing Data Layer
export const StateContext = createContext();

const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export default StateProvider;
// Hook which allows us to pull information from the data layer
export const useStateValue =() => useContext(StateContext);