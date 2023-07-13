import React from "react";
const WeatherCard = ({ searchValue, city, country, time,  getWeatherIcon, store }) => {
  return (
    <div className="card-img-overlay mt-5" >
      {searchValue !== "" && !city && (
        <div>
          <h1>No Data Found</h1>
        </div>
      )}
      {searchValue !== "" && city && (
        <div>
          <div className="bg-dark opacity-25 py-3 mycard">
            <h1 className="card-title text-capitalize fontWeight">
              <strong>{searchValue}, {country && country.country}</strong>
            </h1>
            <p className="card-text lead fontWeight"><strong>{time}</strong></p>
            <hr />
            <div>
              <span>{getWeatherIcon(store[0].main)}</span>
              <h1 className="mb-5 mt-3 fontWeight">{city.temp}&deg;C</h1>
            </div>
            {store &&
              store.map((elm) => (
                <p key={elm.id} className="lead fw-bold mb-1">
                  <strong>{elm.main}</strong>
                </p>
              ))}
            <p className="lead">
              <strong className="fontWeight">{city.temp_min}&deg;C | {city.temp_max}&deg;C</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;