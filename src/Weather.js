import React, { useState } from "react";
import Form from "./Form";
import FormatDate from "./FormatDate.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      city: response.data.city,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000)
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  
  function search() {
    const apiKey = "65ae2e8ao4f01409ca53644a9atfcbed";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather p-5 m-4">
        <form onSubmit={handleSubmit} className="m-1">
          <input
            className="form-input"
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input className="form-button" type="submit" value="Search" />
        </form>

        <h1 class="mt-5 mb-3">{weatherData.city}</h1>
        <div className="row mt-3 justify-content-evenly">
          <div className="col-md-4">
            <ul>
              <li>
                <FormatDate date={weatherData.date} />
              </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>

          <div className="col-md-4 ml-0">
            <img
              className="weather-icon"
              src={weatherData.icon}
              alt="sunny logo"
            />
            <span className="temperature">{Math.round(weatherData.temp)}</span>
            <span className="unit">℃</span>
          </div>
          <div className="col-md-4 ml-3">
            <ul>
              <li></li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <Form />;
  }
}
