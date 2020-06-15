import React from 'react';

const Button = props => {
  return (
    <div>
      <button
        onClick={props.handleDownloadMeme}
      >
        Download Meme
      </button>
      <button
        onClick={props.randomImage}
      >Random</button>
    </div>
  )
}

export default Button;