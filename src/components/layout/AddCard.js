import React, { useContext } from "react";
import WeatherContext from "../../context/weather/weatherContext";
import { Col, Card, Button } from "react-bootstrap";

const AddCard = () => {
  const weatherContext = useContext(WeatherContext);

  const onClick = () => {
    weatherContext.setModal(true);
  };

  return (
    <div className="styleCard styleAddCard">
      <div className="styleAddCard">
        <Button
          onClick={onClick}
          variant="link"
          style={{ color: "black", textDecoration: "none" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Button>
      </div>
    </div>
  );
};

export default AddCard;
