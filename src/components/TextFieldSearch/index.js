import React from "react";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

const TextFieldSearch = ({ search, onChange }) => {
  const COLORS = useSelector((state) => state.Theme.theme);
  return (
    <TextField
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: `${COLORS.inputBorder}`,
          },
          "&.Mui-focused fieldset": {
            border: `1px solid ${COLORS.primary}`,
          },
        },
        width: { xs: "100%", sm: "300px" },
      }}
      InputProps={{
        sx: {
          color: COLORS.text,
          ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
            color: COLORS.text,
          },
          "&:hover": {
            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              borderColor: COLORS.text,
            },
          },
        },
      }}
      size="small"
      placeholder="Search by title..."
      value={search}
      onChange={onChange}
    />
  );
};

export default TextFieldSearch;
