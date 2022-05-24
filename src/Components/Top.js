import React, { useState, useEffect } from "react";
import "./Components.css";
const Top = ({ weatherData }) => {
  const currIcon = `http://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
  const currmaxTemp = Math.ceil(weatherData.current.temp - 273.15);
  const Precipitiation = Math.ceil(weatherData.daily[0].pop);
  const humidity = weatherData.current.humidity;
  const wind_speed = weatherData.current.wind_speed;
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData({
      currIcon,
      currmaxTemp,
      Precipitiation,
      humidity,
      wind_speed,
    });
  }, [currIcon, currmaxTemp, Precipitiation, humidity, wind_speed]);
  return (
    <div className="Top row">
      <div className="current">
        <i>
          {" "}
          <img src={currentData.currIcon} alt="" />{" "}
        </i>
      </div>
      <div className="degree">
        <h2>{currentData.currmaxTemp}</h2>
      </div>
      <div className="degreeType">
        <span>&#176;</span>C | <span>&#176;</span>F
      </div>
      <div className="details">
        <p className="innerDetail">
          Precipitiation {currentData.Precipitiation} %
        </p>
        <p className="innerDetail">Humidity {currentData.humidity} %</p>
        <p className="innerDetail">Wind {currentData.wind_speed} Km/h</p>
      </div>
    </div>
  );
};

export default Top;
