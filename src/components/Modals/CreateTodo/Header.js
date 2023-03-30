import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { handleClose } = props;
  const COLORS = useSelector((state) => state.Theme.theme);
  return (
    <Box className="modalHeader" sx={{ backgroundColor: COLORS.primary }}>
      <Typography variant="h6" sx={{ color: COLORS.white }}>
        Create a new...
      </Typography>
      <CloseIcon
        sx={{ color: COLORS.white, cursor: "pointer" }}
        onClick={handleClose}
      />
    </Box>
  );
};

export default Header;
