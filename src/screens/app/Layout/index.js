import React, { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CreateTodo } from "../../../components/Modals";
import { logout } from "../../../store/actions/auth";

// Assets
import logo from "../../../assets/images/logo.png";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Home";
import TodayIcon from "@mui/icons-material/Today";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import NotesIcon from "@mui/icons-material/Notes";
import LogoutIcon from "@mui/icons-material/Logout";
import { todoModalClose, todoModalOpen } from "../../../store/actions/modal";

const drawerWidth = 300;

function Layout(props) {
  const { window } = props;
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const COLORS = useSelector((state) => state.Theme.theme);
  const TODOS = useSelector((state) => state.Todo);

  const dispatch = useDispatch();

  // Create Modal Start
  const handleOpen = () => dispatch(todoModalOpen(true));
  const handleClose = () => dispatch(todoModalClose(true));
  // Create Modal End

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Link = (props) => {
    const { to, icon, title, count } = props;
    return (
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "navlinkActive" : "navlink")}
      >
        <Box
          component={"span"}
          sx={{ lineHeight: 0, display: "flex", alignItems: "center" }}
        >
          <Box component={"span"} sx={{ width: "40px" }}>
            {icon}
          </Box>
          <Typography sx={{ marginTop: "2px" }}>{title}</Typography>
        </Box>
        {count !== 0 && (
          <span className="count" style={{ backgroundColor: COLORS.primary }}>
            {count}
          </span>
        )}
      </NavLink>
    );
  };

  const drawer = (
    <>
      <Box
        style={{
          backgroundColor: COLORS.black,
          paddingInline: 25,
          paddingBlock: 15,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          width={130}
          style={{ backgroundColor: COLORS.black }}
        />
      </Box>
      <Box sx={{ height: "100%" }}>
        <Link
          to={"/"}
          title={"Home"}
          icon={<DashboardIcon />}
          count={TODOS?.todos?.length || 0}
        />
        <Link
          to={"today"}
          title={"Today"}
          icon={<TodayIcon />}
          count={TODOS?.today?.length || 0}
        />
        <Link
          to={"week"}
          title={"Week"}
          icon={<ViewWeekIcon />}
          count={TODOS?.week?.length || 0}
        />
        <Link
          to={"projects"}
          title={"Projects"}
          icon={<AccountTreeIcon />}
          count={0}
        />
        <Link to={"notes"} title={"Notes"} icon={<NotesIcon />} count={0} />
      </Box>
      <Box sx={{ padding: "15px" }}>
        <Button variant="contained" className="addBtn" onClick={handleOpen}>
          <AddIcon sx={{ fontSize: "22px" }} /> &nbsp; Add
        </Button>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          borderBottom: "1px solid rgb(200,200,200)",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: COLORS.background,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: COLORS.black }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: COLORS.black, fontWeight: "bold" }}
          >
            {pathname === "/" && "Home"}
            {pathname === "/today" && "Today"}
            {pathname === "/week" && "Week"}
            {pathname === "/projects" && "Projects"}
            {pathname === "/notes" && "Notes"}
          </Typography>
          <LogoutIcon
            sx={{ color: COLORS.black, cursor: "pointer" }}
            onClick={() => dispatch(logout())}
          />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: COLORS.black,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: COLORS.black,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <CreateTodo handleClose={handleClose} />
    </Box>
  );
}

Layout.propTypes = {
  window: PropTypes.func,
};

export default Layout;
