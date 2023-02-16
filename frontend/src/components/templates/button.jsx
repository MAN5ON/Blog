import React from "react";
import s from "../styles/templates/buttonTemp.module.css";

export const TemplateButton = ({type, text, click }) => {
  return (
    <button className={s.buttonTemp} type={type} onClick={click}>
      {text}
    </button>
  );
};
