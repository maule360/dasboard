/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import Context from './OperadoresContext';
import Reducer from './OperadoresReducer';

import {
  GET_LISTA_OPERADORES,
  FAIL_LISTA_OPERADORES,
  GET_LISTA_OPERADORES_PROVINCIA,
  FAIL_LISTA_OPERADORES_PROVINCIA,
} from './index';

const SolverState = ({ children }) => {
  const initialState = {
    dataListaOperadores: [],
    totalOperadores: null,
    totalComunasOperadores: null,
    totalProvinciaOperadores: null,
    totalTipoOperadores: null,
    totalCategoriaOperadores: null,
    dataListaOperadoresProvincia: [],
    Provincia: null,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const setProvincia = async (prov) => {
    state.Provincia = prov;
  };

  const getListaOperadoresProvincia = async (id) => {
    try {
      const res = await clienteAxios.get(`/operadores/${id}/provincia`);
      dispatch({
        type: GET_LISTA_OPERADORES_PROVINCIA,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_LISTA_OPERADORES_PROVINCIA,
        payload: 'fail',
      });
    }
  };

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
        getListaOperadoresProvincia,
        dataListaOperadoresProvincia: state.dataListaOperadoresProvincia,
        Provincia: state.Provincia,
        setProvincia,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SolverState;
