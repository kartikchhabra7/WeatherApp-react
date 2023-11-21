import React, { useEffect, useState } from "react";
import "./WeatherApp.css";
import Input from "../common/Input";
import WeatherCard from "../card/WeatherCard";
import { getWeatherIcon } from "../icons/getWeatherIcon";

function WeatherApp() {
  const imageAlt = "weather image not found";
  const [city, setCity] = useState(null);
  const [store, setStore] = useState(null);
  const [country, setCountry] = useState(null);
  const [storeimage, setStoreImage] = useState([]);
  const [searchValue, setSearch] = useState("");
  const [time, setTime] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const debounceSearch = setTimeout(async () => {
      if (!searchValue) return;
      try {
        const apikey = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${process.env.REACT_APP_SECRET_KEY}&units=metric`;
        const data = await fetch(apikey);
        const actualdata = await data.json();
        setCity(actualdata.main);
        setStore(actualdata.weather);
        setStoreImage(actualdata.weather);
        setCountry(actualdata.sys);
      } catch (error) {
        console.log(error);
        setHasError(error);
      }
    }, 1000);

    return () => clearTimeout(debounceSearch);
  }, [searchValue]);

  function onChangeEvent(event) {
    const { value } = event.target;

    function capitalizeFirstLetter() {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    setSearch(capitalizeFirstLetter());
  }

  function timeupdate() {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    setTime(currentTime);
  }

  useEffect(() => {
    const intervalId = setInterval(timeupdate, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (hasError) {
    return (
      <div>
        <h5>{hasError.stack}</h5>
        <hr />
        <h5 className="text-center">Please Check Your ApiEndPoints</h5>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center heading">Weather App</h1>
      <hr className="text-white" />

      <div className="container mt-5 text-center">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              {searchValue !== "" && storeimage && storeimage.length > 0 && (
                <img
                  src={`https://source.unsplash.com/600x800/?${storeimage[0].main}`}
                  alt={imageAlt}
                  className=""
                />
              )}

              <Input value={searchValue} onChange={onChangeEvent} />

              <WeatherCard
                searchValue={searchValue}
                city={city}
                country={country}
                time={time}
                store={store}
                getWeatherIcon={getWeatherIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
