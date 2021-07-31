import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="all-center">
        <a
          href={`https://www.reddit.com/u/${post.data.author}`}
          target="_blank"
          className="title"
        >
          u/{post.data.author}
        </a>
        <a
          href={`https://www.reddit.com/u/${post.data.subreddit_name_prefixed}`}
          target="_blank"
          className="title"
        >
          {post.data.subreddit_name_prefixed}
        </a>
        <div>
          <img
            style={{ height: '120px', width: '120px', borderRadius: '6px' }}
            className="large all-center"
            src={post.data.url_overridden_by_dest}
            alt=""
          />
        </div>
        <p style={{ fontSize: '10px' }}>Comments {post.data.num_comments}</p>
      </div>
    </div>
  );
};

export default PostItem;
