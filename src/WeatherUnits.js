import React, { useState } from "react";

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
      <div className="weather-temp">
        <span className="weather-temp-today">{Math.round(props.celsius)}</span>{" "}
        <span className="units">
          ℃ |{" "}
          <a href="/" onClick={convertToFarenhait}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (Math.round(props.celsius) * 9) / 5 + 32;
    return (
      <div className="weather-temp">
        <span className="weather-temp-today">{Math.round(farenheit)}</span>{" "}
        <span className="units">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}
