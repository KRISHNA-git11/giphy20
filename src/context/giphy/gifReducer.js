import { SEARCH_GIFS, ADD_RECENTS, CLEAR_GIFS } from '../types';

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
    case ADD_RECENTS:
      return {
        ...state,
        searchList: [...state, action.payload],
      };
    default:
      return state;
  }
};
