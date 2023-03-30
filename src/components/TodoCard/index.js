import React, { useState } from "react";

// Style
import "./styles.css";

// MUI
import {
  Box,
  Checkbox,
  Stack,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

// MUI Icon
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Third
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import swal from "sweetalert";

// Utility Function
import { letterCase } from "../../utils";

// Component Modal
import { priorityModalOpen } from "../../store/actions/modal";
import { deleteTodo, isCompletedTodo } from "../../store/actions/todo";

const TodoCard = ({ data, projectShow = false }) => {
  const { title, date, isCompleted, type, priority, details, docId } = data;

  const dispatch = useDispatch();

  // Theme Colors
  const COLORS = useSelector((state) => state.Theme.theme);

  // Menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Priority
  // const [priorityModalOpen, setPriorityModalOpen] = useState(false);

  // Menu
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Priority
  const handlePriorityOpen = () =>
    dispatch(
      priorityModalOpen({
        priority,
        docId,
      })
    );

  // Delete Todo
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      dispatch(deleteTodo(docId));
      if (willDelete) {
        swal("", "Deleted successfully", "success");
      }
    });
  };

  const hanldeIsCompleted = () => {
    console.log({ docId, isCompleted });
    dispatch(isCompletedTodo({ docId, isCompleted }));
  };

  // Get Priority Status Color
  const getColor = (key) => {
    const obj = {
      low: COLORS.green1,
      medium: COLORS.orange,
      high: COLORS.red,
    };
    return obj[key];
  };

  return (
    <Box
      component={"div"}
      className="cardBox"
      sx={{
        backgroundColor: COLORS.white,
        borderLeftColor: getColor(priority),
      }}
    >
      <Checkbox
        {...label}
        checked={isCompleted}
        color="success"
        onChange={hanldeIsCompleted}
      />
      <Typography
        sx={{
          flex: 1,
          fontSize: "15px",
          textDecoration: isCompleted && "line-through",
        }}
      >
        {title}
      </Typography>
      <Stack flexDirection={"row"} alignItems="center" sx={{ gap: "10px" }}>
        {projectShow && (
          <Typography sx={{ fontSize: "11px" }}>{letterCase(type)}</Typography>
        )}
        <Box
          component="button"
          className="priority"
          sx={{
            backgroundColor: getColor(priority),
            outline: "none",
            border: "none",
          }}
          onClick={handlePriorityOpen}
        >
          <Typography
            sx={{ fontSize: "12px", fontWeight: "bold", color: COLORS.white }}
          >
            {letterCase(priority)}
          </Typography>
        </Box>
        <Stack alignItems={"center"}>
          <Typography sx={{ fontSize: "10px" }}>
            {moment(date).format("DD-MM-YYYY")}
          </Typography>
          <Typography sx={{ fontSize: "10px" }}>
            {moment(date).format("hh:mm A")}
          </Typography>
        </Stack>
        <BorderColorIcon className="actionIcon" sx={{ color: COLORS.icon }} />
        <DeleteIcon
          className="actionIcon"
          sx={{ color: COLORS.icon }}
          onClick={handleDelete}
        />
        <Box>
          <MoreVertIcon
            className="actionIcon"
            sx={{ color: COLORS.icon }}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleMenuClick}
          />
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </MenuItem>
          </Menu>
        </Box>
      </Stack>
    </Box>
  );
};

export default TodoCard;