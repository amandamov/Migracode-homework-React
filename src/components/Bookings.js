import React, { useEffect, useState } from "react";
import RenderCards from "./RenderiCards.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

// correct URL: https://cyf-react.glitch.me
// error URL: https://cyf-react.glitch.me/error

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        if (res.status != 200) {
          alert("Sorry. There was an error with the data.");
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);
        console.log("show a message.");
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    const bookingsFiltered = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(bookingsFiltered);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
