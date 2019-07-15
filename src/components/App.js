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
    err: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  // handleCitySubmit = e => {
  //   e.preventDefault();

  //   const API = ` http://api.openweathermap.org/data/2.5/weather?q=${
  //     this.state.value
  //   }&APPID=${APIKey}&units=metric `;

  //   fetch(API)
  //     .then(response => {
  //       if (response.ok) {
  //         return response;
  //       }
  //       throw Error("Nie udalo sie");
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       const time = new Date().toLocaleString();
  //       this.setState(state => ({
  //         err: false,
  //         date: time,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //         city: state.value
  //       }));
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState(state => ({
  //         err: true,
  //         city: state.value
  //       }));
  //     });
  // };

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
            city: state.value
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
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
