import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createProject, updateProject } from "../../../store/actions/project";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Stack, TextField } from "@mui/material";
import { Progress } from "../../../components";

const Projects = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const PROJECT = useSelector((state) => state.Project);
  const dispatch = useDispatch();

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
      title: PROJECT?.editProject?.title || "",
      details: PROJECT?.editProject?.details || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (PROJECT.isEditProject) {
        dispatch(
          updateProject({ ...values, docId: PROJECT?.editProject?.docId })
        );
      } else {
        dispatch(createProject(values));
      }
    },
  });
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={styles.box}
      onSubmit={handleSubmit}
    >
      <Stack spacing={1.5}>
        <TextField
          sx={styles.focus}
          size="small"
          fullWidth
          id="outlined-required"
          label="Title"
          placeholder="House Renovation"
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
          placeholder="About Project"
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
        {PROJECT?.loading ? (
          <Progress />
        ) : PROJECT.isEditProject ? (
          "Update Project"
        ) : (
          "Create Project"
        )}
      </Button>
    </Box>
  );
};

export default Projects;

const styles = {
  box: {
    width: "100%",
    height: { xs: "405px", sm: "calc(100% - 65px)" },
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
