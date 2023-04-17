import logo from "../../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { activeForm } from "../../../store/actions/modal";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import NotesIcon from "@mui/icons-material/Notes";
import { useEffect, useState } from "react";

const SideBar = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const MODAL = useSelector((state) => state.Modal);
  const { isEditTodo } = useSelector((state) => state.Todo);
  const { isEditProject } = useSelector((state) => state.Project);
  const { isEditNote } = useSelector((state) => state.Note);

  const init = ["todo", "project", "note"];
  const [editMode, setEditMode] = useState(init);

  const dispatch = useDispatch();
  const handleActive = (value) => {
    dispatch(activeForm(value));
  };

  useEffect(() => {
    if (isEditTodo) {
      setEditMode(["todo"]);
    } else if (isEditProject) {
      setEditMode(["project"]);
    } else if (isEditNote) {
      setEditMode(["note"]);
    } else setEditMode(init);
    return () => setEditMode(init);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditTodo, isEditProject, isEditNote]);

  return (
    <Box
      className="modalSideBar"
      sx={{
        width: { xs: "auto", sm: "230px", md: "230px" },
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box className="modalLogo">
        <img
          src={logo}
          alt="Logo"
          width={100}
          style={{ backgroundColor: COLORS.sideBar }}
        />
      </Box>
      {editMode.includes("todo") && (
        <Typography
          className={`link ${MODAL.activeForm === "todo" && "modalActiveLink"}`}
          onClick={() => handleActive("todo")}
        >
          <SignalCellularAltIcon /> &nbsp; ToDo
        </Typography>
      )}
      {editMode.includes("project") && (
        <Typography
          className={`link ${
            MODAL.activeForm === "project" && "modalActiveLink"
          }`}
          onClick={() => handleActive("project")}
        >
          <AccountTreeIcon />
          &nbsp; Project
        </Typography>
      )}
      {editMode.includes("note") && (
        <Typography
          className={`link ${MODAL.activeForm === "note" && "modalActiveLink"}`}
          onClick={() => handleActive("note")}
        >
          <NotesIcon />
          &nbsp; Note
        </Typography>
      )}
    </Box>
  );
};

export default SideBar;
