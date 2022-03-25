import React from "react";
import './style.scss'
const Advertisement: React.FC = () => {
  return (
    <div className="advertisement-wrapper">
      <div className="advertisement">
        <div className="advertisement__container">
          <div className="advertisement__title">ADVERTISEMENT</div>
          <div className="advertisement__content"></div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
