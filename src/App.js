import React, { Component } from "react";
import Header from "./Header/header";
import Wrapper from "./Wrapper/wrapper";
import Calculator from "./Calculator/calculator";
import Promo from "./Promo/Promo";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Promo />
        <Calculator />
      </Wrapper>
    );
  }
}

export default App;
