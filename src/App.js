import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

function App(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.weather[0].icon);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,

      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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

          <div className="row">
            <div className="col-sm-2">
              <div className="forecast-day">Mon</div>
              <div className="forecast-icon">24</div>
              <div className="forecast-temperature">23</div>
            </div>
            <div className="col-sm-2">
              <div className="forecast-day">Tue</div>
              <div className="forecast-icon">24</div>
              <div className="forecast-temperature">24</div>
            </div>
            <div className="col-sm-2">
              {" "}
              <div className="forecast-day">Wed</div>
              <div className="forecast-icon">23</div>
              <div className="forecast-temperature">23</div>
            </div>
            <div className="col-sm-2">
              <div className="forecast-day">Thu</div>
              <div className="forecast-icon">23</div>
              <div className="forecast-temperature">23</div>
            </div>
            <div className="col-sm-2">
              {" "}
              <div className="forecast-day">Fri</div>
              <div className="forecast-icon">23</div>
              <div className="forecast-temperature">23</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}

export default App;
