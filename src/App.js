import React from 'react';
import './App.css';
import domtoimage from 'dom-to-image-more';
import Form from './components/form/Form'
import Content from './components/content/content'
import Result from './components/result/Result'

function App() {
  return (
    <div className="App">
      <Form />
      <Content />
      <Result />
    </div>
  );
}

export default App;
