import { Box, CircularProgress } from "@mui/material";

const container = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const FullPageLoading = () => {
  return (
    <Box sx={container}>
      <CircularProgress size={50} sx={{ color: "black" }} />
    </Box>
  );
};

export default FullPageLoading;
