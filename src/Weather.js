import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Form from "./Form";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      city: response.data.city,
      wind: response.data.wind.speed,
    });
  }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function handleCityChange(event) {
      setCity(event.target.value);
    }

function search(){
  const apiKey = "65ae2e8ao4f01409ca53644a9atfcbed";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${weatherData.city}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);}

  if (weatherData.ready) {
    return (
      <div className="Weather p-5 m-4">
        <form className="m-1" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="search"
            placeholder="Enter a city"
            onChange={handleCityChange}
          />
          <input className="form-button" type="submit" value="Search" />
        </form>

        <h1 class="mt-5 mb-">{weatherData.city}</h1>
        <div className="row mt-4">
          <div className="col-4">
            <ul>
              <li>Wednesday 7:00</li>
              <li>Mostly Cloudy</li>
            </ul>
          </div>

          <div className="col-4">
            <img
              className="weather-icon"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny logo"
            />
            <span className="temperature">{weatherData.temp}</span>
            <span className="unit">℃</span>
          </div>
          <div className="col-4">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <Form/>;
  }
}