import { Typography } from "@mui/material";

const TextFieldError = ({ errors, touched }) => {
  return (
    <Typography
      sx={{
        fontSize: "12px",
        color: "red",
        marginLeft: "15px",
        marginTop: "3px",
      }}
    >
      {errors && touched && errors}
    </Typography>
  );
};

export default TextFieldError;
