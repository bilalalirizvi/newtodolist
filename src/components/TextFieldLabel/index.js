import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const TextFieldLabel = ({ text }) => {
  const COLORS = useSelector((state) => state.Theme.theme);
  return (
    <Typography sx={{ fontSize: "14px", color: COLORS.label }}>
      {text}
    </Typography>
  );
};

export default TextFieldLabel;
