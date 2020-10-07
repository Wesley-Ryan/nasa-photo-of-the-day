import React from "react";
import { Jumbotron } from "reactstrap";
import "./App.css";

const ApodImage = (props) => {
  const { apodImg } = props;
  return (
    <div className="container">
      <Jumbotron
        className="apod-image"
        fluid
        style={{ backgroundImage: `url(${apodImg})`, backgroundSize: "cover" }}
      ></Jumbotron>
    </div>
  );
};

export default ApodImage;
