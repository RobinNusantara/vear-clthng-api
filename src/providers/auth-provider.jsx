import React, {useEffect, createContext, useReducer} from 'react';
import {authReducers, initialState} from '../reducers/auth.reducers';
import {auth} from '../config/firebase';

export const AuthDispatchContext = createContext();
export const AuthStateContext = createContext();

function AuthProvider({children}) {
  const [state, dispatch] = useReducer(authReducers, initialState);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
    });
    return unsubscribe;
  });

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export default AuthProvider;
