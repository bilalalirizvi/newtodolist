import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import "../styles.css";
import logo from "../../../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Label,
  PasswordTextField,
  Progress,
  TextFieldError,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../store/actions/auth";

const Signup = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const AUTH = useSelector((state) => state.Auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    userName: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters")
      .required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
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
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createUser({ ...values, navigate }));
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
          Signup
        </Typography>
        <Typography
          sx={{ fontSize: "12px", textAlign: "center", color: COLORS.gray }}
        >
          Enter your information below
        </Typography>
        <Stack>
          <Label text={"User Name"} />
          <TextField
            sx={styles.focus}
            size="small"
            fullWidth
            name="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(errors.userName && touched.userName && errors.userName)}
          />
          <TextFieldError errors={errors.userName} touched={touched.userName} />
        </Stack>
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
        <Stack>
          <Label text={"Password"} />
          <PasswordTextField
            sx={styles.focus}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.password}
            touched={touched.password}
          />
          <TextFieldError errors={errors.password} touched={touched.password} />
        </Stack>
        <Stack>
          <Label text={"Confrim Password"} />
          <PasswordTextField
            sx={styles.focus}
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.confirmPassword}
            touched={touched.confirmPassword}
            name="confirmPassword"
          />
          <TextFieldError
            errors={errors.confirmPassword}
            touched={touched.confirmPassword}
          />
        </Stack>
        <Stack justifyContent={"space-between"} direction="row">
          <Typography sx={{ fontSize: "12px", color: COLORS.gray }}>
            Already have an account?{" "}
            <Box
              component="span"
              sx={{ color: COLORS.primary, cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Box>
          </Typography>
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
          {AUTH?.loading ? <Progress /> : "Signup"}
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;

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
