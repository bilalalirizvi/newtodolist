import React from "react";
import "./styles.css";
import { Box, Stack, Typography } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";

// Component Modal
import {
  activeForm,
  projectDetailsModalOpen,
  todoModalOpen,
} from "../../store/actions/modal";
import { editProject } from "../../store/actions/project";

const ProjectCard = ({ data }) => {
  const { title, date, docId } = data;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Theme Colors
  const COLORS = useSelector((state) => state.Theme.theme);

  // Modal
  const handleDetailModalOpen = () => dispatch(projectDetailsModalOpen(data));

  // Edit Todo
  const handleEdit = () => {
    dispatch(activeForm("project"));
    dispatch(todoModalOpen());
    dispatch(editProject(data));
  };

  return (
    <Box
      component={"div"}
      className="cardBox"
      sx={{
        backgroundColor: COLORS.white,
        borderLeftColor: COLORS.black,
      }}
    >
      <Typography
        sx={{
          flex: 1,
          fontSize: "15px",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/projects/${title}/${docId}`)}
      >
        {title}
      </Typography>
      <Stack flexDirection={"row"} alignItems="center" sx={{ gap: "10px" }}>
        <Box
          component="button"
          className="priority"
          sx={{
            backgroundColor: "transparent",
            outline: "none",
            border: `1px solid ${COLORS.primary}`,
          }}
          onClick={handleDetailModalOpen}
        >
          <Typography
            sx={{ fontSize: "12px", fontWeight: "bold", color: COLORS.primary }}
          >
            Details
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
      </Stack>
    </Box>
  );
};

export default ProjectCard;
