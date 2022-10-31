import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [ready, setReady] = useState(false);

  function getForecastDaily(response) {
    console.log(response.data.daily);
    console.log(response.data.daily[0].temp.max);
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="row WeatherForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                {index}
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    const apiKey = "3c45b88d00cd4824a17999c2d614d01c";
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecastDaily);

    return null;
  }
}
