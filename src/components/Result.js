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
    city
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <div>
        <h3>
          Wyniki wyszukiwanie dla : <em>{city}</em>
        </h3>
        <br />
        <h4>Dane dla dnia i godziny: {date}</h4>
        <h4>Aktualna temperatura: {temp} &#176;C</h4>
        <h4>Wschód słońca o: {sunriseTime}</h4>
        <h4>Zachód słońca o: {sunsetTime}</h4>
        <h4>Aktualna siła wiatru: {wind} m/s</h4>
        <h4>Aktualne ciśnienie: {pressure} hPa</h4>
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
