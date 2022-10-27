import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const constStyle = {
    color,
    fontSize: "30px"
  };
  return <p style={constStyle}>{children}</p>;
};

export default ColorfulMessage;
