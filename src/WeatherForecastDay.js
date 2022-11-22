import React from "react";
import IconForecast from "./IconForecast";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="col-md-2 col-sm-6">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <IconForecast code={props.data.weather[0].icon} />
      </div>
      <div className="forecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temp.max)}º
        </span>

        <span className="WeatherForecast-temperature-min">
          /{Math.round(props.data.temp.min)}º
        </span>
      </div>
    </div>
  );
}
