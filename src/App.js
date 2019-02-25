import React, { Component } from "react";
import Header from "./Header/header";
import Wrapper from "./Wrapper/wrapper";
import Calculator from "./Calculator/calculator";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Calculator />
      </Wrapper>
    );
  }
}

export default App;
