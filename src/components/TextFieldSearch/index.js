import React from "react";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

const TextFieldSearch = ({ search, onChange }) => {
  const COLORS = useSelector((state) => state.Theme.theme);
  return (
    <TextField
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            border: `1px solid ${COLORS.primary}`,
          },
        },
        "& label.Mui-focused": {
          color: "black",
        },
        width: { xs: "100%", sm: "300px" },
      }}
      size="small"
      placeholder="Search by title..."
      value={search}
      onChange={onChange}
    />
  );
};

export default TextFieldSearch;
