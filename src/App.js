import React from "react";

import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings.js";
import "./App.css";
import Heading from "./components/Heading.js";
import RenderiCards from "./components/RenderiCards";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <RenderiCards />
      <Bookings />
      <Footer
        array={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
