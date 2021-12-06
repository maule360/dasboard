/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import Context from './AtraccionesContext';
import Reducer from './AtraccionesReducer';

import {
  GET_LISTA_ATRACCIONES,
  FAIL_LISTA_ATRACCIONES,
  LOADING_LISTA_ATRACCIONES,
  GET_LISTA_ACTIVIDADES,
  FAIL_LISTA_ACTIVIDADES,
  LOADING_LISTA_ACTIVIDADES,
} from './index';

const SolverState = ({ children }) => {
  const initialState = {
    dataListaAtracciones: [],
    LoadingListaAtracciones: false,
    dataListaActividades: [],
    LoadingListaActividades: false,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getListaActividades = async (id) => {
    try {
      const res = await clienteAxios.get(`/atracciones/${id}/actividades`);
      dispatch({
        type: GET_LISTA_ACTIVIDADES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_LISTA_ACTIVIDADES,
        payload: 'fail',
      });
    }
  };
  const setLoadingListaActividades = () => {
    try {
      dispatch({
        type: LOADING_LISTA_ACTIVIDADES,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getListaAtracciones = async () => {
    try {
      const res = await clienteAxios.get('/atracciones');
      dispatch({
        type: GET_LISTA_ATRACCIONES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_LISTA_ATRACCIONES,
        payload: 'fail',
      });
    }
  };
  const setLoadingListaAtracciones = () => {
    try {
      dispatch({
        type: LOADING_LISTA_ATRACCIONES,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        getListaAtracciones,
        dataListaAtracciones: state.dataListaAtracciones,
        setLoadingListaAtracciones,
        LoadingListaAtracciones: state.LoadingListaAtracciones,
        getListaActividades,
        dataListaActividades: state.dataListaActividades,
        setLoadingListaActividades,
        LoadingListaActividades: state.LoadingListaActividades,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SolverState;
