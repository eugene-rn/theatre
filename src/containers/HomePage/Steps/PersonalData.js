import React, { useReducer } from "react";
import InputBox from "../../../components/InputBox";
import SelectBox from "../../../components/SelectBox";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import formReducer from "../reducer.js";
import "../styles.css";

const PersonalData = ({ onChangeStep }) => {
  const initialState = {
    firstName: localStorage.getItem("firstName") || "",
    lastName: localStorage.getItem("lastName") || "",
    birthDate: localStorage.getItem("birthDate")
      ? new Date(localStorage.getItem("birthDate"))
      : "",
    email: localStorage.getItem("email") || "",
    payment: localStorage.getItem("payment") || "cash",
    rules: localStorage.getItem("lastName") || false
  };
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const isDisabled =
    formData.firstName &&
    formData.lastName &&
    formData.birthDate &&
    formData.email &&
    formData.payment &&
    formData.rules;

  return (
    <div className="box personal-box">
      <form
        onSubmit={e => {
          e.preventDefault();
          const newStep = formData.payment === "cash" ? 4 : 3;
          onChangeStep(newStep, formData);
        }}
      >
        <InputBox
          name="firstName"
          label="Ваше имя"
          placeholder="Иван"
          value={formData.firstName}
          required
          handleChange={(name, value) => {
            dispatch({ type: "INPUT_CHANGE", name, value });
            localStorage.setItem(name, value);
          }}
        />
        <InputBox
          name="lastName"
          label="Ваша фамилия"
          placeholder="Иванов"
          value={formData.lastName}
          required
          handleChange={(name, value) => {
            dispatch({ type: "INPUT_CHANGE", name, value });
            localStorage.setItem(name, value);
          }}
        />
        <InputBox
          type="email"
          name="email"
          label="Email"
          placeholder="ivan@ivanov@mail.ru"
          value={formData.email}
          required
          handleChange={(name, value) => {
            dispatch({ type: "INPUT_CHANGE", name, value });
            localStorage.setItem(name, value);
          }}
        />
        <InputBox
          type="calendar"
          name="birthDate"
          value={formData.birthDate}
          label="Дата рождения"
          placeholder="1990-10-31"
          handleChange={(name, value) => {
            dispatch({ type: "INPUT_CHANGE", name, value });
            localStorage.setItem(name, value);
          }}
        />
        <SelectBox
          name="payment"
          label="Выберите способ оплаты"
          value={formData.payment}
          options={[
            { text: "Оплата наличными", value: "cash" },
            { text: "Оплата картой", value: "card" }
          ]}
          handleChange={(name, value) => {
            dispatch({ type: "INPUT_CHANGE", name, value });
            localStorage.setItem(name, value);
          }}
        />
        <Checkbox
          name="rules"
          checked={formData.rules}
          handleChange={async name => {
            await dispatch({ type: "TOGGLE_RULES" });
            localStorage.setItem("rules", !formData.rules);
          }}
        >
          Согласен с правилами
        </Checkbox>
        <div className="buttons">
          <Button handleClick={() => onChangeStep(1, formData)}>Назад</Button>
          <Button
            type="primary"
            htmltype="submit"
            disabled={!isDisabled}
            // handleClick={() => onChangeStep(3, formData)}
          >
            Вперед
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
