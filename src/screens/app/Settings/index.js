import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProfilePicture from "./ProfilePicture";
import DisplayName from "./DisplayName";
import EmailAddress from "./EmailAddress";
import Password from "./Password";
import { useSelector } from "react-redux";

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
        <Box sx={{ p: 5 }}>
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: COLORS.white,
        display: "flex",
        height: "87%",
        // flex: 1,
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
            textTransform: "initial",
            padding: "0px 30px",
          }}
          label="Profile Picture"
          {...a11yProps(0)}
        />
        <StyledTab
          sx={{ textTransform: "initial" }}
          label="Display Name"
          {...a11yProps(1)}
        />
        <StyledTab
          sx={{ textTransform: "initial" }}
          label="Email Address"
          {...a11yProps(2)}
        />
        <StyledTab
          sx={{ textTransform: "initial" }}
          label="Password"
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
