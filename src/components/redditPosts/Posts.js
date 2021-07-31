import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import GifContext from '../../context/giphy/gifContext';

const Posts = () => {
  const gifContext = useContext(GifContext);
  const { search } = gifContext;
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    console.log('hello');
    if (search == '') {
      let res = await axios('https://www.reddit.com/r/trending.json');
      let data = res.data.data.children;
      setPosts(data);
      console.log(res.data.data.children);
    } else {
      let res = await axios(`https://www.reddit.com/r/${search}.json`);
      let data = res.data.data.children;
      setPosts(data);
      console.log(res.data.data.children);
    }
  }, [search]);
  return (
    <div className="all-center">
      <ul style={gridStyle}>
        {posts.map((post) => (
          //   <li>{post.data.author}</li>
          <PostItem key={post.data.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2rem',
};
export default Posts;
