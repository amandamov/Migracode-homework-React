import React, { useState } from "react";
import Row from "./Row";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [customerId, setCustomerId] = useState(0);

  return (
    <div>
      <table className="table">
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
          {props.results.map(booking => {
            return (
              <Row
                key={booking.id}
                changeCustomerId={setCustomerId}
                booking={booking}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
