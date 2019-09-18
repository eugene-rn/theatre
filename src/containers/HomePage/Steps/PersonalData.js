import React, { useReducer } from "react";
import InputBox from "../../../components/InputBox";
import SelectBox from "../../../components/SelectBox";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import formReducer from "../reducer.js";
import "../styles.css";

const initialState = {
  firstName: null,
  lastName: null,
  birthDate: null,
  email: null,
  payment: "cash",
  rules: false
};

const PersonalData = ({ onChangeStep }) => {
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
      <form>
        <InputBox
          name="firstName"
          label="Ваше имя"
          placeholder="Иван"
          required
          handleChange={(name, value) =>
            dispatch({ type: "INPUT_CHANGE", name, value })
          }
        />
        <InputBox
          name="lastName"
          label="Ваша фамилия"
          placeholder="Иванов"
          required
          handleChange={(name, value) =>
            dispatch({ type: "INPUT_CHANGE", name, value })
          }
        />
        <InputBox
          type="email"
          name="email"
          label="Email"
          placeholder="ivan@ivanov@mail.ru"
          required
          handleChange={(name, value) =>
            dispatch({ type: "INPUT_CHANGE", name, value })
          }
        />
        <InputBox
          type="calendar"
          name="birthDate"
          value={formData.birthDate}
          label="Дата рождения"
          placeholder="1990-10-31"
          handleChange={(name, value) =>
            dispatch({ type: "INPUT_CHANGE", name, value })
          }
        />
        <SelectBox
          name="payment"
          label="Выберите способ оплаты"
          value={formData.payment}
          options={[
            { text: "Оплата наличными", value: "cash" },
            { text: "Оплата картой", value: "card" }
          ]}
          handleChange={(name, value) =>
            dispatch({ type: "INPUT_CHANGE", name, value })
          }
        />
        <Checkbox
          name="rules"
          checked={formData.rules}
          handleChange={() => dispatch({ type: "TOGGLE_RULES" })}
        >
          Согласен с правилами
        </Checkbox>
        <div className="buttons">
          <Button handleClick={() => onChangeStep()}>Назад</Button>
          <Button
            type="primary"
            disabled={!isDisabled}
            handleClick={() => {
              console.log("submit");
            }}
          >
            Вперед
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
