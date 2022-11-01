import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.imgUrl} className="card-img-top" />
      <div className="card-body">
        <h1>{props.nameCity}</h1>
        <a href={props.link} className="btn btn-primary">
          Go to {props.nameCity}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
