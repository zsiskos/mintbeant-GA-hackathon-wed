import React, { Component } from 'react';

class Inputs extends Component {
  handleChangeInput = (event) => {
    this.props.changeInput(event);
  }

  handleFocus = (event) => {
    this.props.clearState(event);
  }

  render () {
    return (
      <div>
        <input
          className='topTextInput'
          value={this.props.topText}
          name='topText'
          onChange={this.handleChangeInput}
          onFocus={this.handleFocus}
          />
        <input
          className='bottomTextInput'
          value={this.props.bottomText}
          name='bottomText'
          onChange={this.handleChangeInput}
          onFocus={this.handleFocus}
          />
      </div>
    )
  } 
}

export default Inputs;