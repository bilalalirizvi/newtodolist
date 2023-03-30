import React from "react";

const style = {
  fontSize: "12px",
  marginBottom: "3px",
};

const Label = ({ text }) => {
  return <label style={style}>{text}</label>;
};

export default Label;
