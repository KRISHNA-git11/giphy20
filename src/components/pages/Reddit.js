import React from 'react';
import Posts from '../redditPosts/Posts';
import NavBar from '../layout/NavBar';
import Search from '../layout/Search';

const Reddit = () => {
  return (
    <div>
      <NavBar title={'Reddit'} />
      <Search className="container" />
      <div className="flex container">
        <Posts />
      </div>
    </div>
  );
};

export default Reddit;
