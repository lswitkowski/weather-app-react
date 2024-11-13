import React, { useState } from "react";
import TempConversion from "./TempConversion.js";
import FormatDate from "./FormatDate.js";
import WeatherForecast from "./WeatherForecast.js";
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

        <h1 class="mt-5 mb-3">
          {weatherData.city}{" "}
          <img
            className="weather-icon"
            src={weatherData.icon}
            alt="sunny logo"
          />
        </h1>
        <div className="row mt-5 mb-5 justify-content-evenly">
          <div className="col-md-4 mb-3">
            <ul>
              <li className="opacity">
                <FormatDate date={weatherData.date} />
              </li>
              <li class="text-capitalize opacity">{weatherData.description}</li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <TempConversion celsius={weatherData.temp} />
          </div>
          <div className="col-md-4 mb-3">
            <ul>
              <li></li>
              <li className="opacity">Humidity: {weatherData.humidity}%</li>
              <li className="opacity">Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
          <div>
            <WeatherForecast city={weatherData.city} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
