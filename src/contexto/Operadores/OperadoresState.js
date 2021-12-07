/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import Context from './OperadoresContext';
import Reducer from './OperadoresReducer';

import {
  GET_LISTA_OPERADORES,
  FAIL_LISTA_OPERADORES,
} from './index';

const SolverState = ({ children }) => {
  const initialState = {
    dataListaOperadores: [],
    totalOperadores: null,
    totalComunasOperadores: null,
    totalProvinciaOperadores: null,
    totalTipoOperadores: null,
    totalCategoriaOperadores: null,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getListaOperadores = async () => {
    try {
      const res = await clienteAxios.get('/operadores');
      dispatch({
        type: GET_LISTA_OPERADORES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_LISTA_OPERADORES,
        payload: 'fail',
      });
    }
  };

  return (
    <Context.Provider
      value={{
        getListaOperadores,
        dataListaOperadores: state.dataListaOperadores,
        totalOperadores: state.totalOperadores,
        totalComunasOperadores: state.totalComunasOperadores,
        totalProvinciaOperadores: state.totalProvinciaOperadores,
        totalTipoOperadores: state.totalTipoOperadores,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SolverState;
