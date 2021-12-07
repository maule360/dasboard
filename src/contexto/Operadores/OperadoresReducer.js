/* eslint-disable prefer-spread */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import DataFrame from 'dataframe-js';

import {
  GET_LISTA_OPERADORES,
  FAIL_LISTA_OPERADORES,
} from './index';

export default (state, action) => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  switch (action.type) {
    case GET_LISTA_OPERADORES:
      const preDf = action.payload.map((arr) => arr[0]);
      const df = new DataFrame(preDf);
      const operadores = [].concat.apply([], (df.select('nombre').toArray())).filter(onlyUnique);
      const comunas = [].concat.apply([], (df.select('comuna').toArray())).filter(onlyUnique);
      const provincias = [].concat.apply([], (df.select('provincia').toArray())).filter(onlyUnique);
      const categoria = [].concat.apply([], (df.select('categoria').toArray())).filter(onlyUnique);
      return {
        ...state,
        totalOperadores: operadores.length,
        totalComunasOperadores: comunas.length,
        totalProvinciaOperadores: provincias.length,
        totalTipoOperadores: categoria.length,
        dataListaOperadores: preDf,
      };
    case FAIL_LISTA_OPERADORES:
      return {
        ...state,
        dataListaOperadores: action.payload,
      };

    default:
      return state;
  }
};
