import React from "react";
import "./Weather.css";
export default function Search() {
  return (
    <form id="searchform">
      <input
        type="text"
        id="city-input"
        placeholder="    🔍Enter your city"
        autofocus="on"
      />
      <input type="submit" value="Search" id="search" />
      <input type="button" value="Current City" id="cityButton" />
    </form>
  );
}
