import React, { useState, useEffect, useContext } from "react";
import WeatherContext from "../../context/weather/weatherContext";
import Sun from "../layout/icons/Sun";
import Moon from "../layout/icons/Moon";
import Rain from "../layout/icons/Rain";
import Snow from "../layout/icons/Snow";
import CloudSun from "../layout/icons/CloudSun";
import CloudMoon from "../layout/icons/CloudMoon";

const City = ({ city: { location, current }, index }) => {
  const weatherContext = useContext(WeatherContext);
  const [fade, setFace] = useState("fadeIn");
  const [edit, setEdit] = useState("flip-card-inner");

  useEffect(() => {
    weatherContext.edit === false ? setEdit("flip-card-inner") : setEdit("");
  }, [weatherContext.edit]);

  const onClick = (e) => {
    e.preventDefault();
    setFace("fadeOut");
    setTimeout(() => weatherContext.deleteCity(index), 300);
  };

  const getIcon = (weather) => {
    if (weather.condition.text.search("cloud") > 0) {
      if (weather.is_day === 1) {
        return <CloudSun />;
      } else {
        return <CloudMoon />;
      }
    } else if (weather.condition.text.search("rain") > 0) {
      return <Rain />;
    } else if (weather.condition.text.search("snow") > 0) {
      return <Snow />;
    } else {
      return <Sun />;
    }
  };

  return (
    <div className="flip-card">
      {weatherContext.edit && (
        <div className="styleDeleteBtn">
          <button
            className="fa-solid fa-minus-circle styleCardDelete"
            onClick={onClick}
          />
        </div>
      )}
      <div className={`${fade}  ${edit} styleCard`}>
        <div className="flip-card-front">
          <div className="styleCardImg">{getIcon(current)}</div>
          <div className="styleCardText">
            <h1>
              {weatherContext.units === false
                ? `${current.temp_c}º`
                : `${current.temp_f}F`}
            </h1>
            <p className="styleCardCity">{location.name}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <div>
            <div className="styleCardInfoCity">
              <div> {location.name} </div>
              <div style={{ fontSize: "1.2rem" }}> {location.country}</div>
            </div>
          </div>
          <div className="styleCardInfoGrid">
            <div className="styleCardInfo">
              <div>Humidity</div>
              <div>{current.humidity}%</div>
            </div>
            <div className="styleCardInfo">
              <div>Feels like</div>
              <div>
                {weatherContext.units === false
                  ? `${current.feelslike_c}º`
                  : `${current.feelslike_f}F`}
              </div>
            </div>
            <div className="styleCardInfo">
              <div>Wind speed</div>
              <div>
                {weatherContext.units === false
                  ? `${current.gust_kph}kph`
                  : `${current.gust_mph}mph`}
              </div>
            </div>
            <div className="styleCardInfo">
              <div>UV</div>
              <div>{current.uv}</div>
            </div>
            <div className="styleCardInfo">
              <div>Precipitation</div>
              <div>
                {weatherContext.units === false
                  ? `${current.precip_mm}mm`
                  : `${current.precip_in} inch`}
              </div>
            </div>
            <div className="styleCardInfo">
              <div>Clouds</div>
              <div>{current.cloud}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
