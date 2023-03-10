import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let min = props.date.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let day = days[props.date.getDay()];

  return (
    <span>
      {day}, {hours}:{min}
    </span>
  );
}
