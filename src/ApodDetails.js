import React from "react";
import { CardText, CardBody } from "reactstrap";

const Details = (props) => {
  return (
    <div>
      <CardBody>
        <CardText>{props.apodData.explanation}</CardText>
      </CardBody>
    </div>
  );
};

export default Details;
