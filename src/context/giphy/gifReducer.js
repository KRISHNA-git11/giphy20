import { SEARCH_GIFS, GET_GIFS, CLEAR_GIFS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_GIFS:
      return {
        ...state,
        search: action.payload,
      };
    case CLEAR_GIFS:
      return {
        ...state,
        search: '',
      };
    default:
      return state;
  }
};
