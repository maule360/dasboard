/* eslint-disable prefer-spread */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import DataFrame from 'dataframe-js';

import {
  GET_LISTA_MUSEOS,
  FAIL_LISTA_MUSEOS,
} from './index';

export default (state, action) => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  switch (action.type) {
    case GET_LISTA_MUSEOS:
      const df = new DataFrame(action.payload);
      const Museos = [].concat.apply([], (df.select('nombre').toArray())).filter(onlyUnique);
      const comunas = [].concat.apply([], (df.select('comuna').toArray())).filter(onlyUnique);
      const provincias = [].concat.apply([], (df.select('provincia').toArray())).filter(onlyUnique);
      return {
        ...state,
        totalMuseos: Museos.length,
        totalComunasMuseos: comunas.length,
        totalProvinciaMuseos: provincias.length,
        dataListaMuseos: action.payload,
      };
    case FAIL_LISTA_MUSEOS:
      return {
        ...state,
        dataListaMuseos: action.payload,
      };

    default:
      return state;
  }
};
