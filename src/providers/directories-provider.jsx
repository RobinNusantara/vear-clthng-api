import React, {useEffect, useReducer, createContext, useContext} from 'react';
import {reducer, initialState} from '../reducers/directories.reducer';
import DirActions from '../actions/directories.action';
import {firestore} from '../config/firebase';

const DispatchDirectoriesContext = createContext();
export const useDispatchDirectoriesContext = () => useContext(DispatchDirectoriesContext);

const StateDirectoriesContext = createContext();
export const useStateDirectoriesContext = () => useContext(StateDirectoriesContext);

function DirectoriesProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: DirActions.FETCH_DIR_START});
    const unsubscribe = firestore.collection('directories').onSnapshot((snapshot) => {
      const directories = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
      dispatch({type: DirActions.FETCH_DIR_SUCCESS, payload: directories});
    });
    return unsubscribe;
  }, []);

  return (
    <DispatchDirectoriesContext.Provider value={dispatch}>
      <StateDirectoriesContext.Provider value={state}>
        {children}
      </StateDirectoriesContext.Provider>
    </DispatchDirectoriesContext.Provider>
  );
};

export default DirectoriesProvider;
