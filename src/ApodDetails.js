import React from "react";
import { CardText, CardBody } from "reactstrap";

const Details = (props) => {
  return (
    <div>
      {console.log("PROPS:", props)}

      <CardBody>
        <h3>{props.apodData.date}</h3>
        <CardText>{props.apodData.explanation}</CardText>
      </CardBody>
    </div>
  );
};

export default Details;
