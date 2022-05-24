import React from "react";
import "./Components.css";
import LowerList from "./LowerList";
const Lower = ({ weatherData }) => {
  var unix_timestamp = weatherData.current.dt;
  var date = new Date(unix_timestamp * 1000);
  return (
    <div className="lower ">
      <LowerList daily={weatherData.daily} date={date} />
    </div>
  );
};

export default Lower;
