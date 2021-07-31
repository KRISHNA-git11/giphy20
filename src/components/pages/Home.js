import React from 'react';
import RecentSearchs from '../layout/RecentSearchs';
import Gifs from '../giphyGifs/Gifs';
import NavBar from '../layout/NavBar';
import Search from '../layout/Search';
const Home = () => {
  return (
    <div>
      <NavBar title={'Giphy'} />
      <Search className="container" />
      <div className="flex container">
        <div className="recents">
          <RecentSearchs />
        </div>
        <Gifs className="table" />
      </div>
    </div>
  );
};

export default Home;
