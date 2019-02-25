import React, { Component } from "react";
import Header from "./Header/header";
import Wrapper from "./Wrapper/wrapper";
import CalculatorForm from "./CalculatorForm/CalculatorForm";
import Promo from "./Promo/Promo";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Promo />
        <CalculatorForm />
      </Wrapper>
    );
  }
}

export default App;
