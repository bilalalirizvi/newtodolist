import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const NotFoundItem = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  return (
    <Box p={5} sx={{ width: "100%" }}>
      <Typography sx={{ textAlign: "center", color: COLORS.text }}>
        Not Found...
      </Typography>
    </Box>
  );
};

export default NotFoundItem;
