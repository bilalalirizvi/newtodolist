import React from "react";
import { Box, Typography, Modal, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { letterCase } from "../../../utils";
import CloseIcon from "@mui/icons-material/Close";
import Progress from "../../Progress";
import { updatePriority } from "../../../store/actions/todo";
import { priorityModalClose } from "../../../store/actions/modal";

const PriorityStatus = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const TODOS = useSelector((state) => state.Todo);
  const MODAL = useSelector((state) => state.Modal);

  const dispatch = useDispatch();

  const handlePriorityClose = () => dispatch(priorityModalClose());

  const getColor = (key) => {
    const obj = {
      low: COLORS.green1,
      medium: COLORS.orange,
      high: COLORS.red,
    };
    return obj[key];
  };

  const handleStatus = (value) => {
    dispatch(
      updatePriority({
        priority: value,
        docId: MODAL?.selectedPriority?.docId,
      })
    );
  };

  return (
    // <div>
    <Modal
      open={MODAL?.priorityModal}
      onClose={handlePriorityClose}
      sx={{ background: "rgba(0,0,0,0.6)" }}
    >
      <Box sx={styles.modal}>
        <Box style={{ ...styles.header, backgroundColor: COLORS.primary }}>
          <Typography sx={{ color: COLORS.white, fontWeight: "bold" }}>
            Priority
          </Typography>
          <CloseIcon
            sx={{ color: COLORS.white, cursor: "pointer", fontSize: "18px" }}
            onClick={handlePriorityClose}
          />
        </Box>
        <Typography style={styles.text}>Mark as:</Typography>
        <Stack style={styles.buttonBox}>
          {["low", "high", "medium"].map((v, i) => {
            return (
              v !== MODAL?.selectedPriority?.priority && (
                <Box
                  key={i}
                  component="button"
                  sx={{
                    ...styles.priorityButton,
                    backgroundColor: getColor(v),
                  }}
                  onClick={() => handleStatus(v)}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: COLORS.white,
                    }}
                  >
                    {letterCase(v)}
                  </Typography>
                </Box>
              )
            );
          })}
        </Stack>
        {TODOS?.loading && (
          <Stack style={styles.loading}>
            <Progress color={COLORS.black} />
          </Stack>
        )}
      </Box>
    </Modal>
    // </div>
  );
};

export default PriorityStatus;

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
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
  text: {
    paddingInline: "30px",
    paddingBlock: "15px",
  },
  buttonBox: {
    paddingInline: "30px",
    paddingBottom: "15px",
    justifyContent: "flex-end",
    flexDirection: "row",
    gap: "10px",
  },
  priorityButton: {
    width: "80px",
    display: "flex",
    justifyContent: "center",
    paddingBlock: "5px",
    borderRadius: "20px",
    cursor: "pointer",
    outline: "none",
    border: "none",
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    paddingBlock: "15px",
  },
};
