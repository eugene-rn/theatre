import React, { useState } from "react";
import { formatPerformances } from "../../helpers";
import Performances from "./Steps/Performances";
import "./styles.css";

const sessions = {
  data: [
    {
      id: "1",
      type: "sessions",
      attributes: {
        from: "2019-01-01 12:00",
        to: "2019-01-01 13:00"
      },
      relationships: {
        performance: {
          data: {
            type: "performances",
            id: "1"
          }
        }
      }
    },
    {
      id: "2",
      type: "sessions",
      attributes: {
        from: "2019-01-01 14:00",
        to: "2019-01-01 15:00"
      },
      relationships: {
        performance: {
          data: {
            type: "performances",
            id: "1"
          }
        }
      }
    },
    {
      id: "3",
      type: "sessions",
      attributes: {
        from: "2019-01-01 16:00",
        to: "2019-01-01 17:00"
      },
      relationships: {
        performance: {
          data: {
            type: "performances",
            id: "1"
          }
        }
      }
    },
    {
      id: "4",
      type: "sessions",
      attributes: {
        from: "2019-01-03 12:00",
        to: "2019-01-03 13:00"
      },
      relationships: {
        performance: {
          data: {
            type: "performances",
            id: "2"
          }
        }
      }
    },
    {
      id: "5",
      type: "sessions",
      attributes: {
        from: "2019-01-03 14:00",
        to: "2019-01-03 15:00"
      },
      relationships: {
        performance: {
          data: {
            type: "performances",
            id: "2"
          }
        }
      }
    },
    {
      id: "6",
      type: "sessions",
      attributes: {
        from: "2019-01-03 16:00",
        to: "2019-01-03 17:00"
      },
      relationships: {
        performance: {
          data: {
            type: "performances",
            id: "2"
          }
        }
      }
    }
  ]
};

const performances = {
  data: [
    {
      id: "1",
      type: "performances",
      attributes: {
        title: "Волк и семеро козлят",
        genres: ["Комедия", "Сказка", "Для детей"]
      }
    },
    {
      id: "2",
      type: "performances",
      attributes: {
        title: "Иисус Христос суперзвезда",
        genres: ["Мюзкл", "Сказка"]
      }
    }
  ]
};

const renderStep = (step) => {
    switch (step) {
      case "1":
        return (
          <Performances
            data={formatPerformances(performances.data, sessions.data)}
          />
        );
      default:
        return (
          <Performances
            data={formatPerformances(performances.data, sessions.data)}
          />
        );
    }
  };

const HomePage = () => {
  const step = useState(1);

  return <div className="container">{renderStep(step)}</div>;
};

export default HomePage;