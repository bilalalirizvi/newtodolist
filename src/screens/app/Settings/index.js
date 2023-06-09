import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, useMediaQuery, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProfilePicture from "./ProfilePicture";
import DisplayName from "./DisplayName";
import EmailAddress from "./EmailAddress";
import Password from "./Password";
import { useSelector } from "react-redux";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

const StyledTab = styled(Tab)({
  "&.Mui-selected": {
    color: "#5DCB82",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 5, md: 5 } }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Settings = () => {
  const [value, setValue] = React.useState(0);
  const COLORS = useSelector((state) => state.Theme.theme);
  const AUTH = useSelector((state) => state.Auth);
  const matches = useMediaQuery("(max-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: COLORS.todoCard,
        display: "flex",
        height: "87%",
        boxShadow: "0px 0px 3px rgba(0,0,0,0.1)",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        TabIndicatorProps={{ sx: { background: COLORS.primary } }}
      >
        <StyledTab
          sx={{
            color: COLORS.text,
            textTransform: "initial",
            padding: "0px 30px",
          }}
          label={
            matches ? (
              <Avatar
                sx={{ width: "25px", height: "25px" }}
                src={AUTH?.user?.photoUrl}
              />
            ) : (
              "Profile Picture"
            )
          }
          {...a11yProps(0)}
        />
        <StyledTab
          sx={{ color: COLORS.text, textTransform: "initial" }}
          label={matches ? <BadgeIcon /> : "Display Name"}
          {...a11yProps(1)}
        />
        <StyledTab
          sx={{ color: COLORS.text, textTransform: "initial" }}
          label={matches ? <EmailIcon /> : "Email Address"}
          {...a11yProps(2)}
        />
        <StyledTab
          sx={{ color: COLORS.text, textTransform: "initial" }}
          label={matches ? <PasswordIcon /> : "Password"}
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProfilePicture />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DisplayName />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EmailAddress />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Password />
      </TabPanel>
    </Box>
  );
};

export default Settings;
