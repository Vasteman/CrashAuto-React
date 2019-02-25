import React, { Component } from "react";
import LeftCalculatorForm from "./LeftCalculatorForm/LeftCalculatorForm";
import Calculator from "./Calculator/calculator";
import TotalLine from "./TotalLine/TotalLine";

import pagesData from "./PagesData/PagesData";
import "./CalculatorForm.css";

export default class CalculatorForm extends Component {
  state = {
    page: 0, // 0-5
    chosenOptions: [],
    totalPrice: 0
  };

  render() {
    const { title, options } = pagesData[this.state.page];
    const { page, totalPrice, chosenOptions } = this.state;
    return (
      <div className="calc-block clearfix">
        <LeftCalculatorForm />
        <Calculator
          pagesData={pagesData}
          page={page}
          title={title}
          options={options}
          chosenOptions={chosenOptions}
          onMenuBtnClick={this.onMenuBtnClick}
          onOptionClick={this.onOptionClick}
        />
        <TotalLine
          page={page}
          totalPrice={totalPrice}
          onResetClick={this.onResetClick}
          onPrevPageClick={this.onPrevPageClick}
          onNextPageClick={this.onNextPageClick}
        />
      </div>
    );
  }

  onMenuBtnClick = id => {
    this.setState({
      page: id
    });
  };

  onOptionClick = name => {
    let newChosenOptions = [...this.state.chosenOptions];
    if (newChosenOptions.includes(name)) {
      newChosenOptions.splice(newChosenOptions.indexOf(name), 1);
    } else {
      newChosenOptions.push(name);
    }
    this.setState({
      chosenOptions: newChosenOptions,
      totalPrice: newChosenOptions.length * 100
    });
  };

  onResetClick = () => {
    this.setState({
      chosenOptions: [],
      totalPrice: 0
    });
  };

  onNextPageClick = () => {
    if (this.state.page !== 5) {
      this.setState({
        page: this.state.page + 1
      });
    } else {
      this.setState({
        page: 0
      });
    }
  };

  onPrevPageClick = () => {
    if (this.state.page !== 0) {
      this.setState({
        page: this.state.page - 1
      });
    } else {
      this.setState({
        page: 5
      });
    }
  };
}
