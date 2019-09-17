import React from "react";
import moment from "moment";
import Title from "../../../components/Title";
import "../styles.css";

const Performances = ({ data }) => {
  console.log(moment(data[0].sessions[0].from).format("DD-MM-YYYY"));
  console.log(data);
  return (
    <div className="performances">
      {data.map((elem, idx) => (
        <div key={idx} className="performance">
          <Title size="h2">{elem.attributes.title}</Title>
          <div className="genres">
            {elem.attributes.genres.map(genre => (
              <span className="genre" key={genre}>
                {genre}
              </span>
            ))}
          </div>
          <div className="sessions">
            {elem.sessions.map(day => (
              <div key={day.day}>
                <Title size="h4">{moment(day.day).format("DD.MM.YYYY")}</Title>
                <div className="times">
                  {day.times.map(time => (
                    <div className="session" key={time.from}>
                      <div className="time">{time.from}</div>
                      <span>-</span>
                      <div className="time">{time.to}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Performances;
