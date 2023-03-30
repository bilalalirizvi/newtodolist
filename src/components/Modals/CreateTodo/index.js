import { Modal, Box } from "@mui/material";
import "./styles.css";
import { useSelector } from "react-redux";

import SideBar from "./SideBar";
import Header from "./Header";
import { useState } from "react";
import Todo from "./Todo";
import Projects from "./Projects";
import Note from "./Note";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "900px",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "1px solid #fff",
};

const CreateTodo = (props) => {
  const { handleClose } = props;
  const COLORS = useSelector((state) => state.Theme.theme);
  const MODAL = useSelector((state) => state.Modal);
  const [active, setActive] = useState("todo");
  const handleActive = (value) => setActive(value);

  return (
    <Modal
      open={MODAL?.todoModal}
      onClose={handleClose}
      sx={{ background: "rgba(0,0,0,0.6)" }}
    >
      <Box sx={style}>
        <Box className="modalBody">
          <SideBar handleActive={handleActive} active={active} />
          <Box
            className="modalContent"
            sx={{ backgroundColor: COLORS.background }}
          >
            <Header handleClose={handleClose} />
            {active === "todo" && <Todo />}
            {active === "project" && <Projects />}
            {active === "note" && <Note />}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateTodo;
