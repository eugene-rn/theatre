import React from "react";
import "./styles.css";

const Checkbox = ({ children, name, checked, handleChange }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" name={name} defaultChecked={checked} onChange={() => handleChange(name)} />
      <div className="checkbox-text">{children}</div>
    </label>
  );
}

export default Checkbox;
