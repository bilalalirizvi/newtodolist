import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import "./style.css";

const Loader = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  return (
    <Box className="loaderContainer">
      <Box className="loader" sx={{ borderColor: COLORS.text }}></Box>
    </Box>
  );
};

export default Loader;
