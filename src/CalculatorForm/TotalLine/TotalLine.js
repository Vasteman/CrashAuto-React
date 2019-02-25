import React from "react";

const TotalLine = ({
  page,
  totalPrice,
  onResetClick,
  onPrevPageClick,
  onNextPageClick
}) => {
  return (
    <div className="total-line">
      <div className="total-price">
        <h3>
          Итого: <span>{totalPrice}</span>
        </h3>
      </div>

      <div className="btn btn-clear" onClick={onResetClick}>
        Сбросить параметры
      </div>
      <div className="btn btn-arrow btn-left" onClick={onPrevPageClick}>
        влево
      </div>
      <div>
        0<span>{page + 1}</span>/06
      </div>
      <div className="btn btn-arrow btn-right" onClick={onNextPageClick}>
        вправо
      </div>
    </div>
  );
};

export default TotalLine;
