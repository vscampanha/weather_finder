import React, { useReducer } from "react";
import WeatherContext from "./weatherContext";
import WeatherReducer from "./weatherReducer";

import axios from "axios";

import {
  DELETE_CITY,
  GET_CITIES,
  SET_MODAL,
  SET_UNITS,
  SET_EDIT,
} from "../types";

const WeatherState = (props) => {
  const initialState = {
    cities: [],
    modal: false,
    units: false,
    edit: false,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  //Get city
  const getCity = async (city) => {
    const arrCities = [];
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_CLIENT_SECRET}&q=${city}&aqi=no`
    );
    arrCities.push(...state.cities);
    // Check if city already exists
    const cityFilter = arrCities.filter(
      (currCity) => currCity.location.name === res.data.location.name
    );

    if (cityFilter.length === 0) {
      arrCities.push(res.data);
      dispatch({ type: GET_CITIES, payload: arrCities });
    }
  };

  // Set Modal
  const setModal = (modal) => {
    dispatch({ type: SET_MODAL, payload: modal });
  };

  //Set Units
  const setUnits = (units) => {
    dispatch({ type: SET_UNITS, payload: units });
  };

  //Set Edit
  const setEdit = (edit) => {
    dispatch({ type: SET_EDIT, payload: edit });
  };

  //Delete City
  const deleteCity = (id) => {
    const arrCities = [];
    arrCities.push(...state.cities);
    arrCities.splice(id, 1);
    dispatch({ type: DELETE_CITY, payload: arrCities });
  };

  return (
    <WeatherContext.Provider
      value={{
        cities: state.cities,
        modal: state.modal,
        units: state.units,
        edit: state.edit,
        setModal,
        getCity,
        setUnits,
        deleteCity,
        setEdit,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
