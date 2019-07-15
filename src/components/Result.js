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
    description
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
        <h4>Opis pogody: {description}</h4>
        <hr />
        <h4>
          Opis pogody:
          <img
            src={`http://openweathermap.org/img/wn/${description}.png`}
            alt="aaa"
          />
        </h4>
        <hr />
        <h4>Dane dla dnia i godziny: {date}</h4>
        <hr />
        <h4>Aktualna temperatura: {temp} &#176;C</h4>
        <hr />
        <h4>Wschód słońca o: {sunriseTime}</h4>
        <hr />
        <h4>Zachód słońca o: {sunsetTime}</h4>
        <hr />
        <h4>Aktualna siła wiatru: {wind} m/s</h4>
        <hr />
        <h4>Aktualne ciśnienie: {pressure} hPa</h4>
        <hr />
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
