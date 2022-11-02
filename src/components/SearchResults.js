import React from "react";
import fakeBookings from "../data/fakeBookings.json";
import moment from "moment";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {fakeBookings.map(booking => {
          let checkIn = moment(booking.checkInDate);
          let checkOut = moment(booking.checkOutDate);
          let numberNights = checkOut.diff(checkIn, "days");
          return (
            <tr>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{numberNights}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
