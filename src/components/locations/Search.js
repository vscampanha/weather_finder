import React, { useContext, useState } from "react";
import WeatherContext from "../../context/weather/weatherContext";
import { Modal, Form } from "react-bootstrap";

const Search = () => {
  const weatherContext = useContext(WeatherContext);
  const { getCity, setModal, modal } = weatherContext;

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getCity(text);
    setText("");
    setModal(false);
  };

  return (
    weatherContext.modal && (
      <Modal
        show={modal}
        onHide={() => setModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter City"
                value={text}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    )
  );
};

export default Search;
