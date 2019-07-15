import React from "react";

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

  return (
    <React.Fragment>
      <div>Pogoda dla: {city}</div>
      <div>Temperatura: {temp}</div>
    </React.Fragment>
  );
};

export default Result;
