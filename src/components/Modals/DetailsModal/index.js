import React from "react";
import { Box, Typography, Modal, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { firstLetterCapital, letterCase } from "../../../utils";
import CloseIcon from "@mui/icons-material/Close";
import { detailsModalClose } from "../../../store/actions/modal";
import moment from "moment";

const DetailsModal = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const MODAL = useSelector((state) => state.Modal);
  const {
    title,
    type: project,
    createdBy,
    date: dueDate,
    isCompleted,
    priority,
    details,
  } = MODAL.selectedDetails;

  const dispatch = useDispatch();

  const handleDetailsClose = () => dispatch(detailsModalClose());

  return (
    <Modal
      open={MODAL?.detailsModal}
      onClose={handleDetailsClose}
      sx={{ background: "rgba(0,0,0,0.6)" }}
    >
      <Box sx={styles.modal}>
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
        <Stack style={{ ...styles.body, backgroundColor: COLORS.background }}>
          <Stack sx={{ color: COLORS.text }}>
            <Typography style={styles.textHeading}>Project:</Typography>
            <Typography style={styles.textHeading}>Created By:</Typography>
            <Typography style={styles.textHeading}>Due Date:</Typography>
            <Typography style={styles.textHeading}>Completed:</Typography>
            <Typography style={styles.textHeading}>Priority:</Typography>
            <Typography style={styles.textHeading}>Details:</Typography>
          </Stack>
          <Stack sx={{ flex: 1, color: COLORS.text }}>
            <Typography>{letterCase(project)}</Typography>
            <Typography>
              {moment(createdBy).format("DD-MM-YYYY | hh:mm A")}
            </Typography>
            <Typography>{moment(dueDate).format("DD-MM-YYYY")}</Typography>
            <Typography>{isCompleted ? "Yes" : "No"}</Typography>
            <Typography>{letterCase(priority)}</Typography>
            <Typography>{details && firstLetterCapital(details)}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default DetailsModal;

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "600px", md: "600px" },
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
