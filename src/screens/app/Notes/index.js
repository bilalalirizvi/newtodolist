import { Box } from "@mui/material";
import React, { useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { getNote } from "../../../store/actions/note";
import { Empty, Loader, NoteCard } from "../../../components";
import { activeForm, todoModalOpen } from "../../../store/actions/modal";

const Note = () => {
  const NOTES = useSelector((state) => state.Note);
  const dispatch = useDispatch();

  useEffect(() => {
    if (NOTES.notes.length === 0) dispatch(getNote());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {NOTES.loading ? (
        <Loader />
      ) : (
        <>
          {NOTES?.notes?.length === 0 ? (
            <Empty
              title={"Note"}
              description={"Create a new Note."}
              onClick={() => {
                dispatch(todoModalOpen());
                dispatch(activeForm("note"));
              }}
              buttonText={"Create Note"}
            />
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
