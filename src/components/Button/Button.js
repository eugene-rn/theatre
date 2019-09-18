import React from "react";
import "./styles.css";

const Button = ({ children, type, disabled, handleClick }) => {
  return <button disabled={disabled} className={`button ${type}`} onClick={() => handleClick()}>{children}</button>
}

export default Button;
