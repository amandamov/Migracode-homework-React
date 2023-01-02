import React from "react";

const arrayFooter = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = props => {
  return (
    <div>
      <footer>
        <ul>
          {props.array.map(info => (
            <li key={info}>{info}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
