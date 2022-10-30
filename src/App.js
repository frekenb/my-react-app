import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

function App(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data.coord);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      coord: response.data.coord,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coord: response.data.coord,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="app-container">
        <Header />
        <div className="main-app-part container">
          <div className="clearfix">
            <form className="float-left" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city..."
                autoComplete="off"
                onChange={handleCityChange}
              />
              <input type="submit" className="btn btn-primary" value="Search" />
              <button className="float-right btn btn-success">
                Current location
              </button>
            </form>
          </div>
          <WeatherInfo data={weatherData} />

          <WeatherForecast coordinates={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}

export default App;
