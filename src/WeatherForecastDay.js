import React from "react";
import IconForecast from "./IconForecast";

export default function WeatherForecastDay(props) {
  return (
    <div className="col-sm-2">
      <div className="forecast-day"></div>
      <div className="forecast-icon">
        <IconForecast code={props.weather[0].icon} />
      </div>
      <div className="forecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.main.temp_max)}º
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.main.temp_min)}º
        </span>
      </div>
    </div>
  );
}
