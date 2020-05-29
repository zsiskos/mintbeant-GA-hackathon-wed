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
          value={this.props.topText}
          name='topText'
          onChange={this.handleChangeInput}
          />
        <input
          className='bottomTextInput'
          value={this.props.bottomText}
          name='bottomText'
          onChange={this.handleChangeInput}
          />
      </div>
    )
  } 
}

export default Inputs;