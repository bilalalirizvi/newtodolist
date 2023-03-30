import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import "../styles.css";
import logo from "../../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label, Progress, TextFieldError } from "../../../components";

const ForgotPassword = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const schema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters")
      .required("Required"),
  });

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    // resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <Box className="authContainer">
      <img src={logo} alt="Logo" width={200} />
      <Box
        component="form"
        autoComplete="off"
        className="formBox"
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Forgot Password
        </Typography>
        <Typography
          sx={{ fontSize: "12px", textAlign: "center", color: COLORS.gray }}
        >
          Enter your email below to recover your password
        </Typography>
        <Stack>
          <Label text={"Email"} />
          <TextField
            sx={styles.focus}
            size="small"
            fullWidth
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(errors.email && touched.email && errors.email)}
          />
          <TextFieldError errors={errors.email} touched={touched.email} />
        </Stack>

        <Button
          type="submit"
          variant="contained"
          sx={{
            height: "38px",
            color: COLORS.white,
            backgroundColor: COLORS.primary,
            "&:hover": {
              backgroundColor: COLORS.primary,
            },
          }}
        >
          {false ? <Progress /> : "Forgot Password"}
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPassword;

const styles = {
  box: {
    width: "100%",
    height: "calc(100% - 65px)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  focus: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        border: "1px solid black",
      },
    },
    "& label.Mui-focused": {
      color: "black",
    },
  },
};
