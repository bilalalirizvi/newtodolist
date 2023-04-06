import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const style = {
  position: "absolute",
  right: "10px",
  top: "10px",
  fontSize: "20px",
  cursor: "pointer",
};

const PasswordTextField = ({
  sx,
  values,
  onChange,
  onBlur,
  errors,
  touched,
  name,
}) => {
  const [type, setType] = useState("password");
  return (
    <Box sx={{ position: "relative" }}>
      <TextField
        type={type}
        fullWidth
        sx={sx}
        size="small"
        name={name || "password"}
        value={values}
        onChange={onChange}
        onBlur={onBlur}
        error={!!(errors && touched && errors)}
      />
      {type === "password" ? (
        <VisibilityOffIcon sx={style} onClick={() => setType("text")} />
      ) : (
        <VisibilityIcon sx={style} onClick={() => setType("password")} />
      )}
    </Box>
  );
};

export default PasswordTextField;
