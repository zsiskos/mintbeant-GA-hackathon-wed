import React, { Component } from 'react';

class Inputs extends Component {
  handleChangeInput = (event) => {
    this.props.changeInput(event);
  }

  render () {
    return (
      <div>
        <input
          className='topTextInput'
          name='topText'
          onChange={this.handleChangeInput}
          />
        <input
          className='bottomTextInput'
          name='bottomText'
          onChange={this.handleChangeInput}
          />
      </div>
    )
  } 
}

export default Inputs;