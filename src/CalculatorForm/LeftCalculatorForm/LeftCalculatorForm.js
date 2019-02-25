import React from "react";

import "./LeftCalculatorForm.css";

const LeftCalculatorForm = () => {
  return (
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
  );
};

export default LeftCalculatorForm;
