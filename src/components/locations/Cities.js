import React, { useContext } from "react";
import City from "./City";

import WeatherContext from "../../context/weather/weatherContext";

const Cities = () => {
  const weatherContext = useContext(WeatherContext);
  const { cities } = weatherContext;

  return cities.map((city, index) => (
    <City key={index} index={index} city={city} />
  ));
};

export default Cities;
