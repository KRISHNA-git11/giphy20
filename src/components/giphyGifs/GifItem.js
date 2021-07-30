import React from 'react';

const GifItem = ({ gif }) => {
  return <div className="card" style={{display:"flex",flexDirection:"column"}} >
      <div className="all-center">
      <p className="title">{gif.title}</p>
      <div>
      <img style={{height:'120px',width:'120px', borderRadius:'6px'}} className="large all-center" src={gif.images.fixed_height_small.url} alt="" />
      </div>
      </div>
      <div className='symbols' style={{cursor:"pointer"}}>
        <i className="fas fa-heart"></i>{' '}
        <i className="fas fa-download"></i>{' '}
        <i className="fas fa-percentage"></i>{' '}
      </div>  
  </div>;
};

export default GifItem;
