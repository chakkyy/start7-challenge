import React from "react";
import Logo from "../../images/logo-rightside-login.svg";
import MidImage from "../../images/rightside-img-mid.svg";
import S from "../../images/Vector-S.svg";
import A from "../../images/Vector-A.svg";
import Line from "../../images/Vector-line.svg";
import "../../styles/components/RightSide.scss";

export const RightSide = () => {
  return (
    <div className="rightside__main-content">
      <div className="rightside__first-block">
        <p>Ajuda</p>
        <img src={Logo} alt={Logo} />
      </div>
      <div className="rightside__second-block">
        <img src={MidImage} alt={MidImage} />
      </div>
      <div className="rightside__three-block">
        <span>
          <img src={Line} alt={Line} className="line" />
          <img src={A} alt={A} />
          <img src={S} alt={S} />
        </span>
        <p>UI/UX Design and Front-end by:</p>
        <p>© 2021, Projetolist</p>
      </div>
    </div>
  );
};
