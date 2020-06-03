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
          onFocus={this.props.clearState}
          />
        <input
          className='bottomTextInput'
          value={this.props.bottomText}
          name='bottomText'
          onFocus={this.handleFocus}
          onChange={this.handleChangeInput}
          />
      </div>
    )
  } 
}

export default Inputs;