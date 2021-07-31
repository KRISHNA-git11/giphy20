import React, { useReducer } from 'react';
import GifContext from './gifContext';
import gifReducer from './gifReducer';
import { SEARCH_GIFS, ADD_RECENTS, CLEAR_GIFS } from '../types';

const GifState = (props) => {
  const initialState = {
    search: '',
    searchList: [],
  };
  const [state, dispatch] = useReducer(gifReducer, initialState);

  const searchGifs = (term) => {
    dispatch({
      type: SEARCH_GIFS,
      payload: term,
    });
  };
  const clearSearch = () => {
    dispatch({
      type: CLEAR_GIFS,
    });
  };

  const addRecents = (text) => {
    dispatch({
      type: ADD_RECENTS,
      payload: text,
    });
  };

  return (
    <GifContext.Provider
      value={{
        search: state.search,
        searchList: state.searchList,
        searchGifs,
        clearSearch,
        addRecents,
      }}
    >
      {props.children}
    </GifContext.Provider>
  );
};

export default GifState;
