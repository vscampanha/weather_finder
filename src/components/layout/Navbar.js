import React, { useContext } from "react";
import UnitToggle from "./UnitToggle";
import EditToggle from "./EditToggle";
import WeatherContext from "../../context/weather/weatherContext";

const Navbar = () => {
  const weatherContext = useContext(WeatherContext);
  const onClick = () => {
    weatherContext.units === true
      ? weatherContext.setUnits(false)
      : weatherContext.setUnits(true);
  };

  return (
    <ul>
      <li>
        <a href="#">
          <i className="fa-solid fa-bolt" /> Weather Finder
        </a>
      </li>
      <li className="menu">
        <div className="sec-center">
          <input
            className="dropdown"
            type="checkbox"
            id="dropdown"
            name="dropdown"
          />
          <label className="for-dropdown" for="dropdown">
            <i className="fa-solid fa-sliders"></i>
          </label>
          <div className="section-dropdown">
            <input
              className="dropdown-sub"
              type="checkbox"
              name="dropdown-sub"
            />
            <label
              className="for-dropdown-sub"
              for="dropdown-sub"
              onClick={onClick}
            >
              <div>Units</div>
              <div>{weatherContext.units === false ? "ºC" : "F"}</div>
            </label>
            <input
              className="dropdown-sub"
              type="checkbox"
              name="dropdown-sub"
            />
            <label className="for-dropdown-sub" for="dropdown-sub">
              Edit <EditToggle />
            </label>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default Navbar;
