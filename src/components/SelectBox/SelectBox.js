import React from "react";
import "./styles.css";

const SelectBox = ({ name, label, options, value, handleChange }) => {
  return (
    <label className="select-box">
      <div className="label">{label}</div>
      <select onChange={({ target: { value } }) => { handleChange(name, value) }} value={value}>
        {options.map(elem => <option key={elem.value} value={elem.value}>{elem.text}</option>)}
      </select>
    </label>
  );
};

export default SelectBox;
