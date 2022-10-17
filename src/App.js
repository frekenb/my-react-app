import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import axios from "axios";
import FormattedDate from "./FormattedDate";

function App(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: "http://openweathermap.org/img/wn/10d@2x.png",
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="app-container">
        <Header />
        <div className="main-app-part container">
          <div className="clearfix">
            <form className="float-left">
              <input
                type="text"
                placeholder="enter a city"
                autoComplete="off"
              />
              <input type="submit" className="btn btn-primary" value="Search" />
            </form>
            <button className="float-left btn btn-success">
              Current location
            </button>
          </div>
          <div className="weather-summary">
            <div className="weather-summary-header pb-4">
              <h1>{weatherData.city}</h1>
              <div className="weather-detail-text">
                <FormattedDate date={weatherData.date} />
              </div>
              <div className="weather-detail-text">Clouds</div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="clearfix">
                    <div className="weather-icon float-left">
                      <img
                        src={weatherData.icon}
                        alt={weatherData.description}
                      />
                    </div>
                    <div className="weather-temp">
                      <span className="weather-temp-today">
                        {weatherData.temperature}
                      </span>{" "}
                      <span className="units">C</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="weather-detail">
                    Precipitation: {weatherData.precipitation}
                  </div>
                  <div className="weather-detail">
                    Wind: {weatherData.wind} km/hour
                  </div>
                  <div className="weather-detail">
                    Humidity: {weatherData.humidity}%
                  </div>
                </div>
              </div>
            </div>
          </div>

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
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <div>Loading...</div>;
  }
}

export default App;
