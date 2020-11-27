import {useState, useCallback} from 'react';
import {useFirestore} from 'react-redux-firebase';

export const useUpdateData = ({uid, collection, payload}) => {
  const [res, setRes] = useState({data: null, error: null, isLoading: false});
  const firestore = useFirestore();

  const callback = useCallback((id) => {
    firestore.collection('users')
        .doc(uid)
        .collection(collection)
        .doc(id)
        .update(payload)
        .then((res) => setRes({data: res, isLoading: false, error: null}))
        .catch((error) => setRes(({data: null, isLoading: false, error: error})));
  }, [firestore, uid, collection, payload]);
  return [res, callback];
};
