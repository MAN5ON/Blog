import React from "react";
import s from "../styles/buttonTemp.module.css";

export const TemplateButton = ({ text, click }) => {
  return (
    <button className={s.buttonTemp} onClick={click}>
      {text}
    </button>
  );
};
