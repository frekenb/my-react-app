import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
  return (
    <div className="weather-summary">
      <div className="weather-summary-header pb-4">
        <h1>{props.data.city}</h1>
        <div className="weather-detail-text">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="weather-detail-text">{props.data.description}</div>
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix">
              <div className="weather-icon float-left">
                <img src={props.data.icon} alt={props.data.description} />
              </div>
              <WeatherUnits celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="weather-detail">
              Precipitation: {props.data.precipitation}
            </div>
            <div className="weather-detail">
              Wind: {props.data.wind} km/hour
            </div>
            <div className="weather-detail">
              Humidity: {props.data.humidity}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
