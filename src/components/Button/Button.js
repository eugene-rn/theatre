import React from "react";
import "./styles.css";

const Button = ({ children, type, htmltype, disabled, handleClick = () => {} }) => {
  return <button disabled={disabled} className={`button ${type}`} htmltype={htmltype} onClick={() => handleClick()}>{children}</button>
}

export default Button;
