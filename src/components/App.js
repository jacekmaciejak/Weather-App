import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

//Key for API from https://openweathermap.org/current
const APIKey = "a88742f1ffb118d512586c071a4a8a8d";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    icon: "",
    description: "",
    err: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;

    if (prevState.value !== this.state.value) {
      const API = ` http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.value
      }&APPID=${APIKey}&units=metric `;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("Nie udalo sie");
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString();
          this.setState(state => ({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: state.value,
            icon: data.weather[0].icon,
            description: data.weather[0].description
          }));
        })
        .catch(err => {
          console.log(err);
          this.setState(state => ({
            err: true,
            city: state.value
          }));
        });
    }
  }

  render() {
    return (
      <div className="App">
        <img
          className="App_back"
          src=" https://www.thoughtco.com/thmb/O0XQ_P1r29akR9gudPjVZj8OpPM=/2123x1416/filters:no_upscale():max_bytes(150000):strip_icc()/548306131-56a9e2a33df78cf772ab3983.jpg"
          alt="Background"
        />
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
