import React, { Component } from 'react';
import Menu from '../Menu/menu';
import CalcHeader from './CalcHeader/CalcHeader';
import Options from './Options/Options';

import pagesData from './PagesData/PagesData';
import './calculator.css';

export default class Calculator extends Component {

  state = {
    page: 0,  // 0-5
    chosenOptions: [] //какие чекбоксы выбраны
  }

  onMenuBtnClick = (id) => {
    this.setState({
      page: id
    })
  }

  render() {
    const data = pagesData;
    const {name} = data[this.state.page];
    const options = pagesData.map((el) => {
      return el.options;
    })

    return (
      <div className="calculator clearfix">
        <Menu labels={data} onMenuBtnClick={this.onMenuBtnClick} />
        <CalcHeader name={name} count={this.state.chosenOptions.length} />
        <Options options={options[this.state.page]} />

      </div>
    )
  }
}