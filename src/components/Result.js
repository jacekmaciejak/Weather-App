import React from "react";
import "./Result.css";

const Result = props => {
  const {
    err,
    date,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    city,
    icon,
    description
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <div className="result_text">
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="aaa"
          />
        </div>
        <h1 style={{ textAlign: "center", textTransform: "capitalize" }}>
          <em>{city}</em>
        </h1>
        <br />
        <h4>
          Weather description:
          <span style={{ textTransform: "uppercase" }}>{description}</span>
        </h4>
        <h4>
          Date and time: <span>{date}</span>
        </h4>
        <h4>
          Current temperature: <span>{temp} &#176;C</span>
        </h4>
        <h4>
          Sunrise time: <span>{sunriseTime}</span>
        </h4>
        <h4>
          Sunset time: <span>{sunsetTime}</span>
        </h4>
        <h4>
          Wind speed: <span>{wind} m/s</span>
        </h4>
        <h4>
          Current pressure: <span>{pressure} hPa</span>
        </h4>
      </div>
    );
  }

  return (
    <div className="result">
      {err ? `Nie mamy w bazie :  "${city}"` : content}
    </div>
  );
};

export default Result;
