import React, { Component } from 'react';

class Inputs extends Component {
  handleChangeInput = (event) => {
    this.props.changeInput(event);
  }

  render () {
    return (
      <div>
        <p>{this.props.topText}</p>
        <input
          name='topText'
          onChange={this.handleChangeInput}
          />
        <input
          name='bottomText'
          onChange={this.handleChangeInput}
          />
      </div>
    )
  } 
}

export default Inputs;