import {
  GET_LISTA_ATRACCIONES,
  FAIL_LISTA_ATRACCIONES,
  LOADING_LISTA_ATRACCIONES,
  GET_LISTA_ACTIVIDADES,
  FAIL_LISTA_ACTIVIDADES,
  LOADING_LISTA_ACTIVIDADES,
} from './index';

export default (state, action) => {
  switch (action.type) {
    case GET_LISTA_ATRACCIONES:
      return {
        ...state,
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
