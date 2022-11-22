import React from "react";
import { WiSunrise, WiSunset } from "react-icons/wi";

export const SunInformation = (props) => {
  function timeSunsire() {
    let sunrise = props.sun.sunrise;

    let Hours = sunrise.getHours();
    if (Hours < 10) {
      Hours = `0${Hours}`;
    }
    let Minutes = sunrise.getMinutes();
    if (Minutes < 10) {
      Minutes = `0${Minutes}`;
    }
    return `${Hours}:${Minutes}`;
  }

  function timeSunset() {
    let sunset = props.sun.sunset;
    let Hours = sunset.getHours();
    if (Hours < 10) {
      Hours = `0${Hours}`;
    }
    let Minutes = sunset.getMinutes();
    if (Minutes < 10) {
      Minutes = `0${Minutes}`;
    }
    return `${Hours}:${Minutes}`;
  }

  return (
    <div className="SunInformation">
      <div className="sunrise-information">
        <WiSunrise style={{ fontSize: "30px", color: "#F9E79F" }} />{" "}
        {timeSunsire()}
      </div>
      <div className="sunset-information">
        <WiSunset style={{ fontSize: "30px", color: "#F5CBA7" }} />{" "}
        {timeSunset()}
      </div>
    </div>
  );
};
