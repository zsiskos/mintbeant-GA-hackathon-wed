import React from 'react';

const Album = props => {
  const image = props.images.map((pic, idx) => (
    <img 
      src={pic.url} 
      alt={pic.name}
      height='100px'
    />
  ));
  return(
    <div>
      {image}
    </div>
  )
}

export default Album;