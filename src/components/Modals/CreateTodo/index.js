import { Modal, Box } from "@mui/material";
import "./styles.css";
import { useSelector } from "react-redux";

import SideBar from "./SideBar";
import Header from "./Header";
import Todo from "./Todo";
import Projects from "./Projects";
import Note from "./Note";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "700px", md: "900px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "1px solid #fff",
};

const CreateTodo = (props) => {
  const { handleClose } = props;
  const COLORS = useSelector((state) => state.Theme.theme);
  const MODAL = useSelector((state) => state.Modal);

  return (
    <Modal
      open={MODAL?.todoModal}
      onClose={handleClose}
      sx={{ background: "rgba(0,0,0,0.6)" }}
    >
      <Box sx={style}>
        <Box className="modalBody">
          <SideBar />
          <Box
            className="modalContent"
            sx={{ backgroundColor: COLORS.background, width: "100%" }}
          >
            <Header handleClose={handleClose} />
            {MODAL.activeForm === "todo" && <Todo />}
            {MODAL.activeForm === "project" && <Projects />}
            {MODAL.activeForm === "note" && <Note />}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateTodo;
