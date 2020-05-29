import React from 'react';

const Button = props => {
  return (
    <div>
      <button>Download Meme</button>
      <button
        onClick={props.randomImage}
      >New Image</button>
    </div>
  )
}

export default Button;