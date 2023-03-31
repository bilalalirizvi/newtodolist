import { Box, Button, Stack, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const Note = () => {
  const COLORS = useSelector((state) => state.Theme.theme);

  const schema = Yup.object().shape({
    title: Yup.string().required("Required"),
    details: Yup.string().required("Required"),
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
      title: "",
      details: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // console.log("values", values);
    },
  });
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={styles.box}
      onSubmit={handleSubmit}
    >
      <Stack sx={{ gap: 1.5 }}>
        <TextField
          sx={styles.focus}
          size="small"
          fullWidth
          id="outlined-required"
          label="Title"
          // placeholder="House Renovation"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!(errors.title && touched.title && errors.title)}
        />
        <TextField
          sx={styles.focus}
          size="small"
          fullWidth
          id="outlined-required"
          label="Details"
          // placeholder="House Renovation"
          name="details"
          value={values.details}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!(errors.details && touched.details && errors.details)}
        />
      </Stack>
      <Button
        type="submit"
        variant="contained"
        sx={{
          color: COLORS.white,
          backgroundColor: COLORS.primary,
          "&:hover": {
            backgroundColor: COLORS.primary,
          },
        }}
      >
        Create Note
      </Button>
    </Box>
  );
};

export default Note;

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
