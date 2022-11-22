import React, { useState } from "react";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";

import "./WeatherUnits.css";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("metrics");

  function convertToFarenhait(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <div className="weather-temp-today">{Math.round(props.celsius)}</div>{" "}
        <div className="units">
          <WiCelsius style={{ fontSize: "35px", color: "#black" }} />/
          <a href="/" onClick={convertToFarenhait}>
            <WiFahrenheit style={{ fontSize: "35px", color: "bababa" }} />
          </a>
        </div>
      </div>
    );
  } else {
    let farenheit = (Math.round(props.celsius) * 9) / 5 + 32;
    return (
      <div className="WeatherUnits">
        <div className="weather-temp-today">{Math.round(farenheit)}</div>{" "}
        <div className="units">
          <a href="/" onClick={showCelsius}>
            <WiCelsius style={{ fontSize: "35px", color: "bababa" }} />
          </a>
          /<WiFahrenheit style={{ fontSize: "35px", color: "#black" }} />
        </div>
      </div>
    );
  }
}
