import React, { Component } from "react";
import Menu from "../Menu/menu";
import CalcHeader from "./CalcHeader/CalcHeader";
import Options from "./Options/Options";

import pagesData from "./PagesData/PagesData";
import "./calculator.css";

export default class Calculator extends Component {
  state = {
    page: 0, // 0-5
    chosenOptions: [],
    totalPrice: 0
  };

  render() {
    const { title, options } = pagesData[this.state.page];
    const { totalPrice, chosenOptions } = this.state;
    return (
      <div className="calc-block clearfix">
        <div className="left-part">
          <h3>Рассчитайте примерную стоимость</h3>
          <div className="form-container">
            <label>
              Ваш телефон
              <input type="tel" placeholder="+79896279597" />
            </label>
            <label>
              Рыночная стоимость автомобиля
              <input type="number" placeholder="800000" />
            </label>
          </div>
          <div className="drag-n-drop">Перетащите фото сюда или загрузите</div>
        </div>
        <div className="right-part">
          <div className="calculator">
            <Menu
              labels={pagesData}
              page={this.state.page}
              onMenuBtnClick={this.onMenuBtnClick}
            />
            <CalcHeader title={title} count={chosenOptions.length} />
            <Options
              options={options}
              chosenOptions={chosenOptions}
              onOptionClick={this.onOptionClick}
            />
          </div>
        </div>
        <div className="total-line">
          <div className="total-price">
            <h3>
              Итого: <span>{this.state.totalPrice}</span>
            </h3>
          </div>

          <div className="btn btn-clear" onClick={this.onResetClick}>
            Сбросить параметры
          </div>
          <div
            className="btn btn-arrow btn-left"
            onClick={this.onPrevPageClick}
          >
            влево
          </div>
          <div>
            0<span>{this.state.page + 1}</span>/06
          </div>
          <div
            className="btn btn-arrow btn-right"
            onClick={this.onNextPageClick}
          >
            вправо
          </div>
        </div>
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
