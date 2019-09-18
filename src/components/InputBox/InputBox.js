import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
registerLocale("ru", ru);

const InputBox = ({ label, name, value, placeholder, type, required, handleChange }) => {
  switch (type) {
    case "calendar":
      return (
        <label className="input-box">
          <div className="label">{label}</div>
          <DatePicker
            name={name}
            selected={value}
            showYearDropdown
            placeholderText={placeholder}
            locale="ru"
            dateFormat="yyyy-MM-dd"
            className="input"
            onChange={(date, e) => {
              e.preventDefault();
              handleChange(name, date);
            }}
          />
        </label>
      );
    default:
      return (
        <label className="input-box">
          <div className="label">{label}</div>
          <input
            name={name}
            required={required}
            value={value}
            type={type || "text"}
            placeholder={placeholder}
            onChange={({ target: { value } }) => handleChange(name, value)}
            className="input"
          />
        </label>
      );
  }
};

export default InputBox;
