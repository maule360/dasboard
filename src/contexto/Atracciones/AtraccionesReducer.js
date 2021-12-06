/* eslint-disable prefer-spread */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import DataFrame from 'dataframe-js';

import {
  GET_LISTA_ATRACCIONES,
  FAIL_LISTA_ATRACCIONES,
  LOADING_LISTA_ATRACCIONES,
  GET_LISTA_ACTIVIDADES,
  FAIL_LISTA_ACTIVIDADES,
  LOADING_LISTA_ACTIVIDADES,
} from './index';

export default (state, action) => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  switch (action.type) {
    case GET_LISTA_ATRACCIONES:
      const df = new DataFrame(action.payload);
      const atracciones = [].concat.apply([], (df.select('nombre').toArray())).filter(onlyUnique);
      const comunas = [].concat.apply([], (df.select('comuna').toArray())).filter(onlyUnique);
      const provincias = [].concat.apply([], (df.select('provincia').toArray())).filter(onlyUnique);
      const tipo = [].concat.apply([], (df.select('descripcion').toArray())).filter(onlyUnique);
      return {
        ...state,
        totalAtracciones: atracciones.length,
        totalComunasAtracciones: comunas.length,
        totalProvinciaAtracciones: provincias.length,
        totalTipoAtracciones: tipo.length,
        dataListaAtracciones: action.payload,
        LoadingListaAtracciones: false,
      };
    case FAIL_LISTA_ATRACCIONES:
      return {
        ...state,
        dataListaAtracciones: action.payload,
        LoadingListaAtracciones: false,
      };
    case LOADING_LISTA_ATRACCIONES:
      return {
        ...state,
        LoadingListaAtracciones: action.payload,
      };
    case GET_LISTA_ACTIVIDADES:
      return {
        ...state,
        dataListaActividades: action.payload,
        LoadingListaActividades: false,
      };
    case FAIL_LISTA_ACTIVIDADES:
      return {
        ...state,
        dataListaActividades: action.payload,
        LoadingListaActividades: false,
      };
    case LOADING_LISTA_ACTIVIDADES:
      return {
        ...state,
        LoadingListaActividades: action.payload,
      };
    default:
      return state;
  }
};
