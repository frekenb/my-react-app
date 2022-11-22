import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function IconForecast(props) {
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
    "01d": "#F9E79F",
    "01n": "#D6DBDF",
    "02d": "#F9E79F",
    "02n": "#E5E7E9",
    "03d": "#F9E79F",
    "03n": "#E5E7E9",
    "04d": "#CCD1D1",
    "04n": "#AEB6BF",
    "09d": "#CCD1D1",
    "09n": "#AEB6BF",
    "10d": "#AED6F1",
    "10n": "#D4E6F1",
    "11d": "#AED6F1",
    "11n": "#D4E6F1",
    "13d": "#D6DBDF",
    "13n": "#D6DBDF",
    "50d": "#D5D8DC",
    "50n": "#D5D8DC",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={colors[props.code]}
      size={props.size}
      animate={true}
    />
  );
}
