import React, { useReducer, useContext, userEffect } from 'react';
// import axios from 'axios';
import initialState from './initialState';
import reducer from './reducer';
// import { DateTime } from 'luxon';
// import { reformDate } from '../utils/reformDate';
// import { translateText } from '../utils/translateText';

const AppContext = React.createContext();

// Οικουμενική πρόσβαση στις καταστάσεις και τις λειτουργίες που δημιουργούμε παρακάτω. Χρήση στο index.js
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Axios
  // Εξασφαλίζουμε ότι το αποδεικτικό μας δεν το στέλνουμε σε όλες τις προσκομίσεις μας αλλά μόνο στα url που δηλώνουμε εδώ.

  // request interceptor

  // response interceptor

  // Λειτουργίες
  const displayAlert = (γλώσσα) => {
    dispatch({ type: 'DISPLAY_ALERT', payload: { γλώσσα } });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: 'CLEAR_ALERT' });
    }, 5000);
  };

  const αλλαγήΓλώσσας = (νέαΓλώσσα) => {
    localStorage.setItem('γλώσσα', νέαΓλώσσα);
    dispatch({
      type: 'ΑΛΛΑΓΗ_ΓΛΩΣΣΑΣ',
      payload: { νέαΓλώσσα },
    });
  };

  const toggleSection = (νέοςΤομέας) => {
    console.log(νέοςΤομέας)
    dispatch({
      type: 'TOGGLE_SECTION',
      payload: { νέοςΤομέας },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        αλλαγήΓλώσσας,
        toggleSection
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Δημιουργία hook για να μην το επαναλαμβάνουμε σε κάθε component
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
