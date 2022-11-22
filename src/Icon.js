import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export const Icon = (props) => {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const colors = {
    "01d": "#F7DC6F",
    "01n": "#D7DBDD",
    "02d": "#F5B041",
    "02n": "#CACFD2",
    "03d": "#EB984E",
    "03n": "#AAB7B8",
    "04d": "#95A5A6",
    "04n": "#717D7E",
    "09d": "#85C1E9",
    "09n": "#CACFD2",
    "10d": "#5499C7",
    "10n": "#99A3A4",
    "11d": "#2980B9",
    "11n": "#99A3A4",
    "13d": "#E5E7E9",
    "13n": "#CACFD2",
    "50d": "#AEB6BF",
    "50n": "#85929E",
  };

  return (
    <div>
      <ReactAnimatedWeather
        icon={codeMapping[props.data]}
        color={colors[props.data]}
        size={150}
        animate={true}
      />
    </div>
  );
};
