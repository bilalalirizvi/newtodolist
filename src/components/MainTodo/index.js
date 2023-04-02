import React, { useEffect } from "react";
// import "./styles.css";
import { Loader, TodoCard } from "../../components";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { DetailsModal, PriorityStatus } from "../../components/Modals";
import { getTodos } from "../../store/actions/todo";
import { getNote } from "../../store/actions/note";

const MainTodo = ({ name, projectShow }) => {
  const TODOS = useSelector((state) => state.Todo);
  const NOTES = useSelector((state) => state.Note);

  const dispatch = useDispatch();

  useEffect(() => {
    if (TODOS.todos.length === 0) dispatch(getTodos());
    if (NOTES.notes.length === 0) dispatch(getNote());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {TODOS?.loading ? (
        <Loader />
      ) : (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            overflowY: "auto",
          }}
        >
          {TODOS[name]?.map((data, index) => (
            <TodoCard key={index} data={data} projectShow={projectShow} />
          ))}
        </Box>
      )}
      {/* Priority Modal */}
      <PriorityStatus />

      {/* Details Modal */}
      <DetailsModal />
    </>
  );
};

export default MainTodo;
