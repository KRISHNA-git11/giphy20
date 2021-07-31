import React, { useContext, useState } from 'react';
import GifContext from '../../context/giphy/gifContext';

const Search = () => {
  const gifContext = useContext(GifContext);
  const { searchGifs, search, clearSearch } = gifContext;
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    searchGifs(text);
    // addRecents(text);
    setText('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="#Search"
          className="search-block"
          value={text}
          onChange={onChange}
        ></input>
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block "
        />
        {search.length > 0 && (
          <button className="btn btn-light btn-block" onClick={clearSearch}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
