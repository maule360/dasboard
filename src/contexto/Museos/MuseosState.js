/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import Context from './MuseosContext';
import Reducer from './MuseosReducer';

import {
  GET_LISTA_MUSEOS,
  FAIL_LISTA_MUSEOS,
} from './index';

const SolverState = ({ children }) => {
  const initialState = {
    dataListaMuseos: [],
    totalMuseos: null,
    totalComunasMuseos: null,
    totalProvinciaMuseos: null,
    totalTipoMuseos: null,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getListaMuseos = async () => {
    try {
      const res = await clienteAxios.get('/museos');
      dispatch({
        type: GET_LISTA_MUSEOS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_LISTA_MUSEOS,
        payload: 'fail',
      });
    }
  };

  return (
    <Context.Provider
      value={{
        getListaMuseos,
        dataListaMuseos: state.dataListaMuseos,
        totalMuseos: state.totalMuseos,
        totalComunasMuseos: state.totalComunasMuseos,
        totalProvinciaMuseos: state.totalProvinciaMuseos,
        totalTipoMuseos: state.totalTipoMuseos,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SolverState;
