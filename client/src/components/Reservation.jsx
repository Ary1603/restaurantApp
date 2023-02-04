import React, { useState } from "react";
import "./reservation.css";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
export function Reservation() {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPhone, setUserPhone] = useState();
  const [reservationDay, setReservationDay] = useState();
  const [reservationHour, setReservationHour] = useState();

  const handleOnChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleOnChangeUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleOnChangeUserPhone = (e) => {
    setUserPhone(e.target.value);
  };

  const handleOnChangeReservationDay = (e) => {
    setReservationDay(e.target.value);
  };

  const handleOnChangeReservationHour = (e) => {
    setReservationHour(e.target.value);
  };

  const submitReservation = () => {
    fetch(
      `/make-reservation?name=${userName}&email=${userEmail}&phone=${userPhone}&reservationDay=${reservationDay}&reservationHour=${reservationHour}
            `,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert("The reservation has been created. Thanks and see you soon !!!");
  };
  return (
    <>
      <form action="">
        <div className="form-container">
          <h1 className="title-reservation-form">Make your reservation</h1>
          <div className="user-data-container">
            <p className="input-title">Name: </p>
            <input
              onChange={handleOnChangeUserName}
              className="principal-inputs"
              type="text"
              placeholder="Name"
            />
            <p className="input-title">E-mail: </p>
            <input
              onChange={handleOnChangeUserEmail}
              className="principal-inputs"
              type="text"
              placeholder="E-mail"
            />
            <p className="input-title">Phone: </p>
            <input
              onChange={handleOnChangeUserPhone}
              className="principal-inputs"
              type="text"
              placeholder="Phone number"
            />
            <br />
            <br />
            <span className="input-title">Day: </span>
            <input onChange={handleOnChangeReservationDay} type="date" />
            <span className="input-title">Hour: </span>
            <input onChange={handleOnChangeReservationHour} type="time" />
          </div>
          <Button
            onClick={submitReservation}
            variant="outline-success btn-submit"
            type="submit"
          >
            Book
          </Button>
        </div>
      </form>
    </>
  );
}
