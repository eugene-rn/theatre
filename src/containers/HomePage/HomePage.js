import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatPerformances } from "../../helpers";
import Performances from "./Steps/Performances";
import PersonalData from "./Steps/PersonalData";
import Payment from "./Steps/Payment";
import Finish from "./Steps/Finish";
import StepBar from "../../components/StepBar";
import Spinner from "../../components/Spinner";
import "./styles.css";

const HomePage = () => {
  const [step, setStep] = useState(+localStorage.getItem("step"));
  const [data, setData] = useState({});
  const [performances, setPerformances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const sessionsPromise = axios.get(
        "http://www.amock.io/api/Darren_Clyd/sessions"
      );
      const performancesPromise = axios.get(
        "http://www.amock.io/api/Darren_Clyd/performances"
      );

      try {
        const responces = await Promise.all([
          performancesPromise,
          sessionsPromise
        ]);
        setPerformances(
          formatPerformances(responces[0].data.data, responces[1].data.data)
        );
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    fetchData();
  }, []);

  const onChangeStep = async (newStep, formData) => {
    await localStorage.setItem("step", newStep);
    setStep(newStep);
    if (formData) {
      await setData({ ...data, ...formData });
      if (formData.payment === "cash" || newStep === 4) {
        onSendForm();
      }
    }
  };

  const onSendForm = async () => {
    const createPayment = () => {
      if (data.payment === "card") {
        return {
          type: "card",
          card: {
            number: data.number,
            valid_thru: data.expired,
            name: data.owner
          }
        };
      } else {
        return { type: "cash" }
      }
    };

    axios.post("", {
      data: {
        type: "orders",
        attributes: {
          session: 1,
          first_name: data.firstName,
          last_name: data.lastName,
          birthday: data.birthDate,
          email: data.email,
          payment: createPayment(),
        }
      }
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Performances
            data={performances}
            onChangeStep={newStep => onChangeStep(newStep)}
          />
        );
      case 2:
        return (
          <PersonalData
            onChangeStep={(newStep, formData) =>
              onChangeStep(newStep, formData)
            }
          />
        );
      case 3:
        return (
          <Payment
            onChangeStep={(newStep, formData) =>
              onChangeStep(newStep, formData)
            }
          />
        );
      case 4:
        return <Finish />;
      default:
        return (
          <Performances
            data={performances}
            onChangeStep={newStep => onChangeStep(newStep)}
          />
        );
    }
  };

  return (
    <div className="container">
      <StepBar currentStep={step} />
      {isLoading ? <Spinner /> : renderStep()}
    </div>
  );
};

export default HomePage;
