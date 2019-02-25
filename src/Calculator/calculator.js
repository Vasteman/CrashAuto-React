import React, { Component } from "react";
import Menu from "../Menu/menu";
import CalcHeader from "./CalcHeader/CalcHeader";
import Options from "./Options/Options";

import pagesData from "./PagesData/PagesData";
import "./calculator.css";

export default class Calculator extends Component {
  state = {
    page: 0, // 0-5
    chosenOptions: []
  };

  render() {
    const { title, options } = pagesData[this.state.page];
    const { chosenOptions } = this.state;
    return (
      <div className="calculator clearfix">
        <Menu labels={pagesData} onMenuBtnClick={this.onMenuBtnClick} />
        <CalcHeader title={title} count={chosenOptions.length} />
        <Options
          options={options}
          chosenOptions={chosenOptions}
          onOptionClick={this.onOptionClick}
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
      chosenOptions: newChosenOptions
    });
  };
}
