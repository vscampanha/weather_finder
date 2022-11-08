import React, { useContext } from "react";
import WeatherContext from "../../context/weather/weatherContext";

const UnitToggle = () => {
  const weatherContext = useContext(WeatherContext);
  const onClick = () => {
    weatherContext.edit === true
      ? weatherContext.setEdit(false)
      : weatherContext.setEdit(true);
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={onClick} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default UnitToggle;
