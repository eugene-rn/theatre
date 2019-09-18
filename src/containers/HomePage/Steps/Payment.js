import React, { useReducer } from "react";
import InputBox from "../../../components/InputBox";
import Button from "../../../components/Button";
import formReducer from "../reducer.js";
import "../styles.css";

const Payment = ({ onChangeStep }) => {
  const initialState = {
    number: localStorage.getItem("number") || "",
    expired: localStorage.getItem("expired") || "",
    owner: localStorage.getItem("owner") || ""
  };
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const isDisabled = formData.number && formData.expired && formData.owner;

  return (
    <div className="box personal-box">
      <form
        onSubmit={e => {
          e.preventDefault();
          onChangeStep(4, formData);
        }}
      >
        <InputBox
          name="number"
          label="Номер карты"
          placeholder="1234123412341234"
          type="number"
          value={formData.number}
          required
          handleChange={(name, value) => {
            dispatch({ type: "INPUT_CHANGE", name, value });
            localStorage.setItem(name, value);
          }}
        />
        <InputBox
          name="expired"
          label="Срок действия карты"
          placeholder="08/22"
          value={formData.expired}
          required
          handleChange={(name, value) => {
            dispatch({ type: "INPUT_CHANGE", name, value });
            localStorage.setItem(name, value);
          }}
        />
        <InputBox
          name="owner"
          label="Владелец карты"
          placeholder="IVAN IVANOV"
          value={formData.owner}
          required
          handleChange={(name, value) => {
            dispatch({ type: "INPUT_CHANGE", name, value });
            localStorage.setItem(name, value);
          }}
        />
        <div className="buttons">
          <Button handleClick={() => onChangeStep(2)}>Назад</Button>
          <Button
            type="primary"
            disabled={!isDisabled}
            // handleClick={() => onChangeStep(4)}
          >
            Готово
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
