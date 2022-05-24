import { useState, useEffect } from "react";
import Lower from "./Components/Lower";
import { APIKEY } from "./utils/apis";
import Top from "./Components/Top";

const App = () => {
  // const APIKEY = "79cbc393141e97a469b56bc911404fa5";

  const [weatherData, setWeatherData] = useState(null);
  const [lat, setlat] = useState(0);
  const [long, setlong] = useState(0);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setlat(position.coords.latitude);
        setlong(position.coords.longitude);
      },
      (err) => {
        console.log(err.message);
      }
    );
    const getWeather = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
        });
    };
    getWeather();
  }, [long]);

  return (
    <div className="main">
      {weatherData === null ? (
        <>Loading...</>
      ) : (
        <div className="container">
          <Top weatherData={weatherData} />
          <Lower weatherData={weatherData} />
        </div>
      )}
    </div>
  );
};

export default App;
