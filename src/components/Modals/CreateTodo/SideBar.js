import logo from "../../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { activeForm } from "../../../store/actions/modal";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import NotesIcon from "@mui/icons-material/Notes";

const SideBar = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const MODAL = useSelector((state) => state.Modal);
  const dispatch = useDispatch();
  const handleActive = (value) => {
    dispatch(activeForm(value));
  };

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
          style={{ backgroundColor: COLORS.black }}
        />
      </Box>
      <Typography
        className={`link ${MODAL.activeForm === "todo" && "modalActiveLink"}`}
        onClick={() => handleActive("todo")}
      >
        <SignalCellularAltIcon /> &nbsp; ToDo
      </Typography>
      <Typography
        className={`link ${
          MODAL.activeForm === "project" && "modalActiveLink"
        }`}
        onClick={() => handleActive("project")}
      >
        <AccountTreeIcon />
        &nbsp; Project
      </Typography>
      <Typography
        className={`link ${MODAL.activeForm === "note" && "modalActiveLink"}`}
        onClick={() => handleActive("note")}
      >
        <NotesIcon />
        &nbsp; Note
      </Typography>
    </Box>
  );
};

export default SideBar;
