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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Third
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import swal from "sweetalert";

// Utility Function
import { letterCase } from "../../utils";

// Component Modal
import {
  activeForm,
  detailsModalOpen,
  priorityModalOpen,
  todoModalOpen,
} from "../../store/actions/modal";
import {
  deleteTodo,
  editTodo,
  isCompletedTodo,
} from "../../store/actions/todo";

const TodoCard = ({ data, projectShow = false }) => {
  const { title, date, isCompleted, type, priority, docId } = data;

  const [expandMenu, setExpandMenu] = useState(false);
  console.log("expandMenu:", expandMenu);

  const dispatch = useDispatch();

  // Theme Colors
  const COLORS = useSelector((state) => state.Theme.theme);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // Priority
  const handlePriorityOpen = () =>
    dispatch(
      priorityModalOpen({
        priority,
        docId,
      })
    );

  // Details
  const handleDetailsOpen = (data) => {
    dispatch(detailsModalOpen(data));
  };

  // Delete Todo
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteTodo(docId));
        swal("", "Deleted successfully", "success");
      }
    });
  };

  // IsCompleted Todo
  const hanldeIsCompleted = () => {
    dispatch(isCompletedTodo({ docId, isCompleted }));
  };

  // Edit Todo
  const handleEdit = () => {
    dispatch(activeForm("todo"));
    dispatch(todoModalOpen());
    dispatch(editTodo(data));
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

  // Component
  const AllMenu = () => {
    // Menu
    const [anchorEl, setAnchorEl] = useState(null);

    // Menu
    const open = Boolean(anchorEl);
    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
      <Stack
        flexDirection={"row"}
        justifyContent={"flex-end"}
        alignItems="center"
        sx={{ gap: "10px" }}
      >
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
        <BorderColorIcon
          className="actionIcon"
          sx={{ color: COLORS.icon }}
          onClick={handleEdit}
        />
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
            <MenuItem
              onClick={() => {
                handleMenuClose();
                handleDetailsOpen(data);
              }}
            >
              Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </MenuItem>
          </Menu>
        </Box>
      </Stack>
    );
  };

  return (
    <Box>
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
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <AllMenu />
        </Box>
        <Stack>
          <ExpandMoreIcon
            sx={{
              cursor: "pointer",
              display: { xs: "block", sm: "none", color: COLORS.black },
            }}
            onClick={() => setExpandMenu(!expandMenu)}
          />
        </Stack>
      </Box>
      {expandMenu && (
        <Stack
          className="hiddenMenu"
          sx={{
            backgroundColor: COLORS.white,
            borderColor: getColor(priority),
          }}
        >
          <AllMenu />
        </Stack>
      )}
    </Box>
  );
};

export default TodoCard;
