import React, {useEffect, useState, createContext, useContext} from 'react';
import {auth} from '../config/firebase';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  function signUpWithEmailAndPassword(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  function signInWithEmailAndPassword(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const value = {
    currentUser,
    signUpWithEmailAndPassword,
    signInWithEmailAndPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
