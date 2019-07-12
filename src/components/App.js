import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

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
    err: ""
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleCitySubmit = e => {
    e.preventDefault();

    const API = ` http://api.openweathermap.org/data/2.5/weather?q=${
      this.state.value
    }&APPID=a88742f1ffb118d512586c071a4a8a8d&units=metric `;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udalo sie");
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result />
      </div>
    );
  }
}

export default App;
