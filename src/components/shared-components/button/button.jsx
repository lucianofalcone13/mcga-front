import React from "react";
import css from "./button.module.css";

const Button = ({ onClick, type, icon, children, size, disabled }) => {
  return (
    <button className={`${css.button} ${css[type]} ${css[size]}`} onClick={onClick} disabled={disabled}>
      {icon ? <div className={css.icon}>{icon}</div> : children}
    </button>
  )
};

export default Button;
