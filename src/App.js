import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

function App(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [input, setInput] = useState("");
  const [spanWidth, setSpanWidth] = useState(40);
  const spanEl = useRef(null);

  useEffect(() => {
    if (input.length > 0) {
      setSpanWidth(spanEl.current.offsetWidth);
    }
  }, [input]);

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      coord: response.data.coord,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
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
    setInput(event.target.value);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="app-container ">
          <div className="container">
            <div className="clearfix">
              <form className="" onSubmit={handleSubmit}>
                Right now in{" "}
                <span className="hide" ref={spanEl}>
                  {input}
                </span>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  autoComplete="off"
                  onChange={handleCityChange}
                  style={{ width: spanWidth + "px" }}
                />
                , it's{" "}
                <span className="weather-description">
                  {weatherData.description}
                </span>
              </form>
            </div>
            <WeatherInfo data={weatherData} />

            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
        <Footer className="fixed-bottom" />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}

export default App;
