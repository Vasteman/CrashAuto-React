import React, { Component } from 'react';
import Header from './Header/header';
import Wrapper from './Wrapper/wrapper';
import Calculator from './Calculator/calculator';

import './App.css';

class App extends Component {
  render() {
    return (
      //<div className="App">
      <Wrapper>
        <Header />
        <Calculator />
      </Wrapper>


      //</div>
    );
  }
}

export default App;
