import logo from "../../../assets/images/logo.png";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import NotesIcon from "@mui/icons-material/Notes";
import { useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

const SideBar = (props) => {
  const { handleActive, active } = props;
  const COLORS = useSelector((state) => state.Theme.theme);
  return (
    <Box className="modalSideBar">
      <Box className="modalLogo">
        <img
          src={logo}
          alt="Logo"
          width={100}
          style={{ backgroundColor: COLORS.black }}
        />
      </Box>
      <Typography
        className={`link ${active === "todo" && "modalActiveLink"}`}
        onClick={() => handleActive("todo")}
      >
        <SignalCellularAltIcon /> &nbsp; ToDo
      </Typography>
      <Typography
        className={`link ${active === "project" && "modalActiveLink"}`}
        onClick={() => handleActive("project")}
      >
        <AccountTreeIcon />
        &nbsp; Project
      </Typography>
      <Typography
        className={`link ${active === "note" && "modalActiveLink"}`}
        onClick={() => handleActive("note")}
      >
        <NotesIcon />
        &nbsp; Note
      </Typography>
    </Box>
  );
};

export default SideBar;
