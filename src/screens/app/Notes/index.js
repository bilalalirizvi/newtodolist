import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { getNote } from "../../../store/actions/note";
import { Loader, NoteCard } from "../../../components";
import { activeForm, todoModalOpen } from "../../../store/actions/modal";

const Note = () => {
  const NOTES = useSelector((state) => state.Note);
  const dispatch = useDispatch();

  useEffect(() => {
    if (NOTES.notes.length === 0) dispatch(getNote());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Empty = () => {
    return (
      <Stack alignItems={"center"} spacing={2}>
        <Typography variant="h6">Empty Note!</Typography>
        <Typography variant="h5">Create a new Note.</Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
              dispatch(todoModalOpen());
              dispatch(activeForm("note"));
            }}
          >
            Add Note
          </Button>
        </Stack>
      </Stack>
    );
  };

  return (
    <>
      {NOTES.loading ? (
        <Loader />
      ) : (
        <>
          {NOTES?.notes?.length === 0 ? (
            <Empty />
          ) : (
            <Box style={styles.noteContainer}>
              {NOTES?.notes?.map((v, i) => {
                return <NoteCard key={i} data={v} />;
              })}
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Note;

const styles = {
  noteContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
  },
};
