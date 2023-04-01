import React from "react";

// Styles
import { Box, Stack, Typography } from "@mui/material";

// Third
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

// MUI Icon
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import { deleteNote, editNote } from "../../store/actions/note";
import { activeForm, todoModalOpen } from "../../store/actions/modal";

const NoteCard = ({ data }) => {
  const { title, details, createdBy, docId } = data;
  const COLORS = useSelector((state) => state.Theme.theme);
  const dispatch = useDispatch();

  // Delete Note
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteNote(docId));
        swal("", "Deleted successfully", "success");
      }
    });
  };

  // Edit Note
  const handleEdit = () => {
    dispatch(activeForm("note"));
    dispatch(todoModalOpen());
    dispatch(editNote(data));
  };

  return (
    <Box sx={{ ...styles.cardBox, backgroundColor: COLORS.white }}>
      <Stack justifyContent={"space-between"} direction="row">
        <Typography sx={{ fontSize: "10px", color: COLORS.primary }}>
          {moment(createdBy).format("DD-MM-YYYY | hh:mm A")}
        </Typography>
        <Stack direction={"row"} spacing={1}>
          <BorderColorIcon
            className="actionIcon"
            sx={{ color: COLORS.primary, fontSize: "18px" }}
            onClick={handleEdit}
          />
          <DeleteIcon
            className="actionIcon"
            sx={{ color: COLORS.primary, fontSize: "18px" }}
            onClick={handleDelete}
          />
        </Stack>
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
    width: {
      xs: "100%",
      sm: "100%",
      md: "calc((100% / 3) - 14px)",
    },
    padding: "20px",
    borderRadius: "5px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "15px",
    marginBlock: "10px",
  },
  details: {
    fontSize: "15px",
  },
  icon: {
    cursor: "pointer",
    fontSize: "16px",
  },
};
