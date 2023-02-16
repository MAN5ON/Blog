import React from "react";
import s from "../styles/templates/buttonTemp.module.css";

export const TemplateButton = ({type, disabled, text, click }) => {
  return (
    <button className={s.buttonTemp} type={type} disabled={disabled} onClick={click}>
      {text}
    </button>
  );
};
