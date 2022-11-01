import React from "react";
import RenderCards from "./RenderiCards.js";
import Search from "./Search.js";
import TouristInfoCards from "./TouristInfoCards.js";
import RenderiCards from "./RenderiCards.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <RenderiCards /> */}
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults />
      </div>
    </div>
  );
};

export default Bookings;
