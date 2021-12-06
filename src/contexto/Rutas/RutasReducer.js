/* eslint-disable prefer-spread */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import DataFrame from 'dataframe-js';

import {
  GET_LISTA_RUTAS,
  FAIL_LISTA_RUTAS,
} from './index';

export default (state, action) => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  switch (action.type) {
    case GET_LISTA_RUTAS:
      const df = new DataFrame(action.payload);
      const rutas = [].concat.apply([], (df.select('nombre').toArray())).filter(onlyUnique);
      const comunas = [].concat.apply([], (df.select('comuna').toArray())).filter(onlyUnique);
      const provincias = [].concat.apply([], (df.select('provincia').toArray())).filter(onlyUnique);
      const tipo = [].concat.apply([], (df.select('descripcion').toArray())).filter(onlyUnique);
      return {
        ...state,
        totalRutas: rutas.length,
        totalComunasRutas: comunas.length,
        totalProvinciaRutas: provincias.length,
        totalTipoRutas: tipo.length,
        dataListaRutas: action.payload,
      };
    case FAIL_LISTA_RUTAS:
      return {
        ...state,
        dataListaRutas: action.payload,
      };

    default:
      return state;
  }
};
