import React from "react";

import "./Promo.css";
import bgImage from "../images/promo/evacuator.svg";

const Promo = () => {
  return (
    <div className="promo clearfix">
      <h2>Cрочно продать автомобиль после ДТП?</h2>
      <p>
        Выкупим Ваш автомобиль с любыми повреждениями или поломкой в день
        обращения!
      </p>
      <div className="btn btn-whatsapp">Написать в WhatsApp</div>
      <div className="btn btn-contacts">Заказать звонок</div>
      <img src={bgImage} />
    </div>
  );
};

export default Promo;
