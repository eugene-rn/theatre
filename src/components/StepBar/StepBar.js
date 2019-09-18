import React from "react";
import Title from "../Title"
import "./styles.css";

const StepBar = ({ currentStep }) => {
  const renderTitle = () => {
    switch(currentStep) {
      case 2:
        return <Title>2. Заполните личные данные</Title>
      case 3:
        return <Title>3. Оплата картой</Title>
      case 4:
        return <Title>Готово!</Title>
      default:
        return <Title>1. Выберите спектакль и время</Title>
    }
  }
  return (
    <div className="title-box">
      <div>
        {renderTitle()}
      </div>
    </div>
  )
}

export default StepBar;
