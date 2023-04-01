import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";

const NoteCard = ({ data }) => {
  const { title, details, createdBy } = data;
  const COLORS = useSelector((state) => state.Theme.theme);

  return (
    <Box style={{ ...styles.cardBox, backgroundColor: COLORS.white }}>
      <Stack justifyContent={"space-between"} direction="row" my={1}>
        <Typography sx={{ fontSize: "10px", color: COLORS.primary }}>
          {moment(createdBy).format("DD-MM-YYYY | hh:mm A")}
        </Typography>
        <CloseIcon
          sx={{ ...styles.icon, color: COLORS.primary }}
          // onClick={handleClose}
        />
      </Stack>
      <Typography sx={{ ...styles.title, color: COLORS.black }}>
        {title}
      </Typography>
      <Typography sx={{ ...styles.details, color: COLORS.black }}>
        {details}
      </Typography>
    </Box>
  );
};

export default NoteCard;

const styles = {
  cardBox: {
    width: "calc((100% / 3) - 14px)",
    padding: "20px",
    borderRadius: "5px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "15px",
  },
  details: {
    fontSize: "15px",
  },
  icon: {
    cursor: "pointer",
    fontSize: "16px",
  },
};
