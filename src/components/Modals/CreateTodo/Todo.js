import { useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Third
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";

import { createTodo, updateTodo } from "../../../store/actions/todo";
import { getProjects } from "../../../store/actions/project";
import { Progress } from "../../../components";

const Todo = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const TODOS = useSelector((state) => state.Todo);
  const PROJECT = useSelector((state) => state.Project);
  const dispatch = useDispatch();

  useEffect(() => {
    if (PROJECT.projects.length === 0) dispatch(getProjects());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const todoScheme = Yup.object().shape({
    type: Yup.string().required("Required"),
    title: Yup.string().required("Required"),
    details: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    priority: Yup.string().required("Required"),
  });

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      type: TODOS.editTodo.type || "",
      title: TODOS.editTodo.title || "",
      details: TODOS.editTodo.details || "",
      date: dayjs(TODOS.editTodo.date) || dayjs(),
      priority: TODOS.editTodo.priority || "",
    },
    validationSchema: todoScheme,
    onSubmit: (values) => {
      const isCompleted = { isCompleted: false };
      const docId = { docId: TODOS.editTodo.docId };
      const getType = PROJECT?.projects?.find((v) => v?.title === values?.type);
      const type = { type: getType.docId };
      const obj = {
        ...values,
        date: dayjs(values?.date).toISOString(),
      };
      if (TODOS.isEditTodo) {
        dispatch(updateTodo({ ...obj, ...docId }));
      } else {
        dispatch(createTodo({ ...obj, ...isCompleted, ...type }));
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
      <FormControl size="small" sx={styles.focus}>
        <InputLabel
          id="demo-select-small"
          sx={{
            color: `${!!(errors.type && touched.type && errors.type) && "red"}`,
          }}
        >
          Add to
        </InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          label="Add to"
          name="type"
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!(errors.type && touched.type && errors.type)}
        >
          <MenuItem value={"general"}>General</MenuItem>
          {PROJECT?.projects?.length > 0 && (
            <ListSubheader>Projects</ListSubheader>
          )}
          {PROJECT?.projects?.map((v, i) => (
            <MenuItem key={i} value={v?.title}>
              {v?.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        sx={styles.focus}
        size="small"
        fullWidth
        id="outlined-required"
        label="Title"
        placeholder="Pay bills"
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
        placeholder="e.g internet, phone, rent"
        multiline
        rows={4}
        maxRows={4}
        name="details"
        value={values.details}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!(errors.details && touched.details && errors.details)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          sx={{ ...styles.focus, "& > *": { height: "40px" } }}
          className="datePicker"
          value={values.date}
          onChange={(newValue) => setFieldValue("date", newValue)}
          format="DD-MM-YYYY"
        />
      </LocalizationProvider>
      <FormControl size="small" fullWidth sx={styles.focus}>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: `${
              !!(errors.priority && touched.priority && errors.priority) &&
              "red"
            }`,
          }}
        >
          Priority
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Priority"
          name="priority"
          value={values.priority}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!(errors.priority && touched.priority && errors.priority)}
        >
          <MenuItem value={"low"}>Low</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"high"}>High</MenuItem>
        </Select>
      </FormControl>
      {TODOS.isEditTodo ? (
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
          {TODOS.loading ? <Progress /> : "Update Todo"}
        </Button>
      ) : (
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
          {TODOS.loading ? <Progress /> : "Add Todo"}
        </Button>
      )}
    </Box>
  );
};

export default Todo;

const styles = {
  box: {
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
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
