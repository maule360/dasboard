/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import Context from './MuseosContext';
import Reducer from './MuseosReducer';

import {
  GET_LISTA_MUSEOS,
  FAIL_LISTA_MUSEOS,
  GET_LISTA_MUSEOS_PROVINCIA,
  FAIL_LISTA_MUSEOS_PROV,
} from './index';

const SolverState = ({ children }) => {
  const initialState = {
    dataListaMuseos: [],
    totalMuseos: null,
    totalComunasMuseos: null,
    totalProvinciaMuseos: null,
    totalTipoMuseos: null,
    dataListaMuseosProvincia: [],
    Provincia: '',
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const setProvincia = async (prov) => {
    state.Provincia = prov;
  };

  const getListaMuseosProvincia = async (id) => {
    try {
      const res = await clienteAxios.get(`/museos/${id}/provincia`);
      dispatch({
        type: GET_LISTA_MUSEOS_PROVINCIA,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_LISTA_MUSEOS_PROV,
        payload: 'fail',
      });
    }
  };

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
        getListaMuseosProvincia,
        dataListaMuseosProvincia: state.dataListaMuseosProvincia,
        setProvincia,
        Provincia: state.Provincia,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SolverState;
