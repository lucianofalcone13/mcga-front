import React from "react";
import css from "./button.module.css";

const Button = ({ onClick, type, icon, children, size, disabled, style }) => {
  return (
    <button
      style={style}
      className={`${css.button} ${css[type]} ${css[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? <div className={css.icon}>{icon}</div> : children}
    </button>
  );
};

export default Button;
