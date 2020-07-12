import React from "react";
import './style.css';

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
const Container = props => {
  return (
    <div 
      className={`container${props.fluid ? "-fluid" : ""} py-5 rounded`}
      id={props.id}
    >
      {props.children}
    </div>
  );
}

// This Row component lets us use a bootstrap row without having to think about class names
const Row = ({ children }) => {
  return <div className="row">{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
const Col = ({ size, children }) => {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export { Container, Row, Col };
