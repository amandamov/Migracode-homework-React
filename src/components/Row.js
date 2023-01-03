import React, { useState } from "react";
import moment from "moment";
import SearchButton from "./SearchButton";

const Row = props => {
  const [clicked, setClicked] = useState(false);

  function changeColor() {
    setClicked(!clicked);
  }

  let checkIn = moment(props.booking.checkInDate);
  let checkOut = moment(props.booking.checkOutDate);
  let numberNights = checkOut.diff(checkIn, "days");
  return (
    <tr className={clicked ? "highlighted" : " "} onClick={changeColor}>
      <td>{props.booking.id}</td>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{numberNights}</td>
      <td>
        <SearchButton
          onClick={props.changeCustomerId(props.booking.id)}
          content={"Customer Profile"}
        />
      </td>
    </tr>
  );
};

export default Row;
