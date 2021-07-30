import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import GifItem from './GifItem';
import GifContext from '../../context/giphy/gifContext';
const Gifs = () => {
  const gifContext = useContext(GifContext);
  const { search } = gifContext;
  const [gifs, setGifs] = useState([]);
  useEffect(async () => {
    if (search == '') {
      let res = await axios('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'OZXFucLLLxGyNLtcF2xwA1mBN28DYk2v',
          limit: 25,
        },
      });
      let data = await res.data.data;
      setGifs(data);
      console.log(data);
    } else {
      let res = await axios('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: 'OZXFucLLLxGyNLtcF2xwA1mBN28DYk2v',
          q: search,
          limit: 20,
        },
      });
      let data = await res.data.data;
      setGifs(data);
      console.log(data);
    }
  }, [search]);
  return (
    <div>
      <ul style={gridStyle}>
        {gifs.map((gif) => (
          <GifItem key={gif.id} gif={gif}></GifItem>
        ))}
      </ul>
    </div>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
export default Gifs;
