/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import axios from 'axios';
import Context from './MauleContext';
import Reducer from './MauleReducer';

import {
  GET_MAULE_DATA,
  FAIL_MAULE_DATA,

} from './index';

const SolverState = ({ children }) => {
  const initialState = {
    dataMaule: {
      title: '',
      summary: '',
      version: '',
      updated: '',
      installs: '',
      maxInstalls: '',
      minInstalls: '',
      genre: '',
      reviews: '',
      score: '',
      ratings: '',
      recentChanges: '',
    },
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getMauleData = async () => {
    try {
      const res = await axios.get('http://localhost:4001/google');
      dispatch({
        type: GET_MAULE_DATA,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_MAULE_DATA,
        payload: 'fail',
      });
    }
  };

  return (
    <Context.Provider
      value={{
        getMauleData,
        dataMaule: state.dataMaule,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SolverState;
