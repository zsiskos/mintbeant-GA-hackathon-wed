import React, { Component } from 'react';
import './App.css';
import Image from '../src/components/Image/Image'
import Inputs from '../src/components/Inputs/Inputs';
import Button from '../src/components/Button/Button';

class App extends Component {
  constructor(){
    super();
    this.state = {
      topText: "top text",
      bottomText: "bottom text",
    };
  }

  changeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          make a meme
        </div>
        <div className="image">
          <Image
          className="image" 
          bottomText={this.state.bottomText}
          topText={this.state.topText}
          />
        </div>
        <div className="inputs">
          <Inputs 
            bottomText={this.state.bottomText}
            topText={this.state.topText}
            changeInput={this.changeInput}
          />
        </div>
        <div className="button">
          <Button
            className="button"
          />
        </div>
        <div className="footer">
          footer
        </div>
      </div>
    );
  }
}

export default App;
