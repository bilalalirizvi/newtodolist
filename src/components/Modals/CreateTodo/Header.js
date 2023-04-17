import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { letterCase } from "../../../utils";

const Header = (props) => {
  const { handleClose } = props;
  const COLORS = useSelector((state) => state.Theme.theme);
  const MODAL = useSelector((state) => state.Modal);
  const { isEditTodo } = useSelector((state) => state.Todo);
  const { isEditProject } = useSelector((state) => state.Project);
  const { isEditNote } = useSelector((state) => state.Note);

  return (
    <Box className="modalHeader" sx={{ backgroundColor: COLORS.primary }}>
      <Typography variant="h6" sx={{ color: COLORS.constantWhite }}>
        {isEditTodo || isEditProject || isEditNote
          ? `Update ${letterCase(MODAL?.activeForm)}`
          : `Create a new ${letterCase(MODAL?.activeForm)}`}
      </Typography>
      <CloseIcon
        sx={{ color: COLORS.constantWhite, cursor: "pointer" }}
        onClick={handleClose}
      />
    </Box>
  );
};

export default Header;
