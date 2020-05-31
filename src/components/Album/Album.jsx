import React from 'react';

const Album = props => {
  const image = props.images.map((pic, idx) => (
    <img className='newMeme'
      src={pic.url} 
      alt={pic.name}
    />
  ));
  return(
    <a>
      {image}
    </a>  

  )
}

export default Album;