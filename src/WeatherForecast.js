import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [ready, setReady] = useState(false);

  function getForecastDaily(response) {
    console.log(response.data.list[0].main.temp_min);
    console.log(response.data.list[0].weather[0].icon);
    setForecast(response.data.list);
    setReady(true);
  }
  function day() {
    let date = new Date(forecast[0].dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (ready) {
    return (
      <div className="row WeatherForecast">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecastDaily);

    return null;
  }
}
