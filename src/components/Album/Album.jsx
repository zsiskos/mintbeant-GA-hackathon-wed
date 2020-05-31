import React from 'react';

const Album = props => {

  const image = props.images.map((pic, idx) => (
      <img className='newMeme'
        key={idx}
        src={pic.url} 
        alt={pic.name}
      />  
 
  ));
  return(
    <a href='#' onClick={props.selectImage}>
      {image}
    </a>  

  )
}

export default Album;