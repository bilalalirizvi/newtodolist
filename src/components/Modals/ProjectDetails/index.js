import React from "react";
import { Box, Typography, Modal, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import CloseIcon from "@mui/icons-material/Close";
import { projectDetailsModalClose } from "../../../store/actions/modal";

const ProjectDetails = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const MODAL = useSelector((state) => state.Modal);
  const { title, details, createdBy } = MODAL.selectedProject;

  const dispatch = useDispatch();

  const handleDetailsClose = () => dispatch(projectDetailsModalClose());

  return (
    <Modal
      open={MODAL?.projectModal}
      onClose={handleDetailsClose}
      sx={{ background: "rgba(0,0,0,0.6)" }}
    >
      <Box sx={{ ...styles.modal, backgroundColor: COLORS.background }}>
        <Box style={{ ...styles.header, backgroundColor: COLORS.primary }}>
          <Typography sx={{ color: COLORS.constantWhite, fontWeight: "bold" }}>
            {title}
          </Typography>
          <CloseIcon
            sx={{
              color: COLORS.constantWhite,
              cursor: "pointer",
              fontSize: "18px",
            }}
            onClick={handleDetailsClose}
          />
        </Box>
        <Stack sx={styles.body}>
          <Stack sx={{ color: COLORS.text }}>
            <Typography style={styles.textHeading}>Created By:</Typography>
            <Typography style={styles.textHeading}>Details:</Typography>
          </Stack>
          <Stack sx={{ flex: 1, color: COLORS.text }}>
            <Typography>
              {moment(createdBy).format("DD-MM-YYYY | hh:mm A")}
            </Typography>
            <Typography>{details}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ProjectDetails;

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "600px" },
    bgcolor: "background.paper",
    boxShadow: 24,
    border: "1px solid #fff",
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingInline: "30px",
    paddingBlock: "15px",
    justifyContent: "space-between",
  },
  body: {
    flexDirection: "row",
    gap: "20px",
    paddingInline: "30px",
    paddingBlock: "15px",
  },
  textHeading: {
    fontWeight: "bold",
  },
};
