import React from "react";
import LineChart from "react-linechart";
const breadCrumb = (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb " style={{ backgroundColor: "black" }}>
      <li className="breadcrumb-item">
        <a className="anchor" href="/#">
          Temperature
        </a>
      </li>
      <li className="breadcrumb-item">
        <a className="anchor" href="/#">
          Precipitation
        </a>
      </li>
      <li className="breadcrumb-item ">
        <a className="anchor" href="/#">
          Wind
        </a>
      </li>
    </ol>
  </nav>
);
const LowerList = ({ daily, date }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  var currentIndex = daily.findIndex((data) => {
    var find = new Date(data.dt * 1000).getDay();
    return find === date.getDay();
  });

  var twentFour = 0;
  var count = 0;

  var data = [{ color: "yellow", points: [] }];
  data[0].points = daily.slice(currentIndex, currentIndex + 6).map((data) => {
    if (count === 0) {
      count++;
    } else {
      twentFour = twentFour + 24;
    }

    return {
      y: Math.ceil(data.temp.max - 273.15),
      x:
        (new Date(data.dt * 1000).getHours() > 12
          ? new Date(data.dt * 1000).getHours() - 12
          : new Date(data.dt * 1000).getHours()) + twentFour,
    };
  });

  const timeList = daily
    .slice(currentIndex, currentIndex + 6)
    .map((data, index) => {
      return (
        <div id={index} className="col-md-2 text-center">
          <p style={{ textAlign: "center", color: "#ada9a9" }}>
            {new Date(data.dt * 1000).getHours() > 12
              ? new Date(data.dt * 1000).getHours() - 12 + " P.M"
              : new Date(data.dt * 1000).getHours() + " A.M"}
          </p>
          <div className="listItem">
            <h3>{days[new Date(data.dt * 1000).getDay()]}</h3>
            <i>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="C"
              />
            </i>
            <br />
            <small>{Math.ceil(data.temp.max - 273.15)}</small>
            <span>&#176;</span>
            {"   "}
            <span style={{ color: "#ada9a9" }}>
              <small>{Math.ceil(data.temp.min - 273.15)}</small>
              <span>&#176;</span>
            </span>
          </div>
        </div>
      );
    });
  return (
    <div className="middle">
      {breadCrumb}
      <div className="chart row" style={{ color: "yellow" }}>
        <LineChart
          width={700}
          height={200}
          data={data}
          xMin="0"
          xMax="200"
          yMin="0"
          ymax="45"
          hideYLabel
          hideXLabel
          hideXAxis
          hideYAxis
        />
      </div>
      <div className="LowerList row">{timeList}</div>
    </div>
  );
};

export default LowerList;
