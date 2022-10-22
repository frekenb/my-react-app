import React from "react";

export default function FormattedDate(props) {
  const days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];
  let day = props.date.getDay();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {days[day]} {hours}:{minutes}
    </div>
  );
}
