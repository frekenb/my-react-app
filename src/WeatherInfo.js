import React from "react";
import { WiStrongWind, WiSprinkle } from "react-icons/wi";
import { SunInformation } from "./SunInformation";
import { Icon } from "./Icon";
import WeatherUnits from "./WeatherUnits";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col col-md-4 col-sm-4">
          <div className="weather-icon float-right">
            <Icon data={props.data.icon} />
          </div>
        </div>
        <div className="col col-md-4 col-sm-4 temperature-info">
          <WeatherUnits celsius={props.data.temperature} />
        </div>
        <div className="col col-md-4 col-sm-4 weather-detail ">
          <div className="wind-information">
            <WiStrongWind style={{ fontSize: "30px", color: "#A9CCE3" }} />{" "}
            <span className="fs-5 imp-inf">{props.data.wind}</span>
            <span className="unit-weather-detail fs-6"> km/hour</span>
          </div>
          <div className="humidity-information fs-5">
            <WiSprinkle style={{ fontSize: "30px", color: "#AED6F1" }} />{" "}
            {props.data.humidity}
            <span className="unit-weather-detail fs-6"> %</span>
          </div>
          <div className="sun-information fs-5">
            <SunInformation sun={props.data} />
          </div>
        </div>
      </div>
    </div>
  );
}
