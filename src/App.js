import React, { Component } from 'react';
import './App.css';
import Image from '../src/components/Image/Image'
import Inputs from '../src/components/Inputs/Inputs';
import Button from '../src/components/Button/Button';

class App extends Component {
  constructor(){
    super();
    this.state = {
      topText: "top",
      bottomText: "bottom",
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
        <Image 
        bottomText={this.state.bottomText}
        topText={this.state.topText}
        />
        <Inputs 
          bottomText={this.state.bottomText}
          topText={this.state.topText}
          changeInput={this.changeInput}/>
        <Button />
      </div>
    );
  }
}

export default App;
