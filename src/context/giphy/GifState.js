import React, { useReducer } from 'react';
import axios from 'axios';
import GifContext from './gifContext';
import gifReducer from './gifReducer';
import { SEARCH_GIFS, GET_GIFS, CLEAR_GIFS } from '../types';

const GifState = (props) => {
  const initialState = {
    search: '',
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

  return (
    <GifContext.Provider
      value={{
        search: state.search,
        searchGifs,
        clearSearch,
      }}
    >
      {props.children}
    </GifContext.Provider>
  );
};

export default GifState;
