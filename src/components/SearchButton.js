import React from "react";

const SearchButton = props => {
  return (
    <button onClick={props.onClick} className="btn btn-primary">
      {props.content}
    </button>
  );
};

export default SearchButton;
