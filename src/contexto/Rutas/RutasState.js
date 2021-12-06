/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import Context from './RutasContext';
import Reducer from './RutasReducer';

import {
  GET_LISTA_RUTAS,
  FAIL_LISTA_RUTAS,
} from './index';

const SolverState = ({ children }) => {
  const initialState = {
    dataListaRutas: [],
    totalRutas: null,
    totalComunasRutas: null,
    totalProvinciaRutas: null,
    totalTipoRutas: null,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getListaRutas = async () => {
    try {
      const res = await clienteAxios.get('/rutas');
      dispatch({
        type: GET_LISTA_RUTAS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_LISTA_RUTAS,
        payload: 'fail',
      });
    }
  };

  return (
    <Context.Provider
      value={{
        getListaRutas,
        dataListaRutas: state.dataListaRutas,
        totalRutas: state.totalRutas,
        totalComunasRutas: state.totalComunasRutas,
        totalProvinciaRutas: state.totalProvinciaRutas,
        totalTipoRutas: state.totalTipoRutas,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SolverState;
