import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Progress } from "../../components";

const MyButton = ({ text, type, width, onClick, loading }) => {
  const COLORS = useSelector((state) => state.Theme.theme);
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: COLORS.primary,
        textTransform: "initial",
        height: "40px",
        width: width || "120px",
        flexShrink: 0,
        "&:hover": {
          backgroundColor: COLORS.primary,
        },
      }}
      type={type}
      onClick={onClick}
    >
      {loading ? <Progress /> : text}
    </Button>
  );
};

export default MyButton;
