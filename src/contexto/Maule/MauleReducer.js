/* eslint-disable camelcase */
/* eslint-disable prefer-spread */
/* eslint-disable no-case-declarations */
import {
  GET_MAULE_DATA,
  FAIL_MAULE_DATA,
} from './index';

export default (state, action) => {
  switch (action.type) {
    case GET_MAULE_DATA:

      return {
        ...state,
        dataMaule: action.payload,
      };
    case FAIL_MAULE_DATA:
      return {
        ...state,
        dataMaule: action.payload,
      };

    default:
      return state;
  }
};
