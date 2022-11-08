import React from "react";
import WeatherState from "./context/weather/weatherState";

import Navbar from "./components/layout/Navbar";
import Search from "./components/locations/Search";
import Cities from "./components/locations/Cities";
import AddCard from "./components/layout/AddCard";

import { Container } from "react-bootstrap";
import "./App.scss";

const App = () => {
  return (
    <WeatherState>
      <Navbar />
      <Container style={styleContainer}>
        <Search />
        <div style={styleGrid}>
          <Cities />
          <AddCard />
        </div>
      </Container>
    </WeatherState>
  );
};

const styleContainer = {
  marginTop: "2rem",
};

const styleGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
};
export default App;
