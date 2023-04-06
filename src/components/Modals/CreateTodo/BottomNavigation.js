import React from "react";
import {
  Box,
  BottomNavigation as Navigation,
  BottomNavigationAction,
} from "@mui/material";

// Icon
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import NotesIcon from "@mui/icons-material/Notes";

import { useDispatch, useSelector } from "react-redux";
import { activeForm } from "../../../store/actions/modal";

const BottomNavigation = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const MODAL = useSelector((state) => state.Modal);
  const dispatch = useDispatch();

  const active = (key) => {
    switch (key) {
      case 0:
        return "todo";
      case 1:
        return "project";
      case 2:
        return "note";
      default:
        return "todo";
    }
  };

  const activeScreen = (key) => {
    switch (key) {
      case "todo":
        return 0;
      case "project":
        return 1;
      case "note":
        return 2;
      default:
        return 0;
    }
  };

  return (
    <Box sx={{ width: "100%", display: { xs: "block", sm: "none" } }}>
      <Navigation
        showLabels
        value={activeScreen(MODAL.activeForm)}
        onChange={(event, newValue) => {
          dispatch(activeForm(active(newValue)));
        }}
        sx={{
          backgroundColor: COLORS.black,
          "& .css-co5tlx-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected":
            {
              color: COLORS.primary,
            },
        }}
      >
        <BottomNavigationAction
          label="Todo"
          icon={<SignalCellularAltIcon />}
          sx={{
            color: COLORS.white,
          }}
        />
        <BottomNavigationAction
          label="Project"
          icon={<AccountTreeIcon />}
          sx={{ color: COLORS.white }}
        />
        <BottomNavigationAction
          label="Note"
          icon={<NotesIcon />}
          sx={{ color: COLORS.white }}
        />
      </Navigation>
    </Box>
  );
};

export default BottomNavigation;
