import React from "react";
import { Jumbotron } from "reactstrap";
import "./App.css";

const ApodImage = (props) => {
  const { apodImg, title, author } = props;
  return (
    <div className="container">
      <Jumbotron
        className="apod-image"
        fluid
        style={{ backgroundImage: `url(${apodImg})`, backgroundSize: "cover" }}
      >
        <h1 style={{ color: "white", fontSize: "60px" }}>{title}</h1>
        <div className="copyright">
          <p className="watermark">Copyright: {author}</p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default ApodImage;
