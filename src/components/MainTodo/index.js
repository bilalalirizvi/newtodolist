import React, { useEffect } from "react";
// import "./styles.css";
import { Loader, TodoCard } from "../../components";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { PriorityStatus } from "../../components/Modals";
import {
  priorityModalClose,
  priorityModalOpen,
} from "../../store/actions/modal";
import { getTodos } from "../../store/actions/todo";

const MainTodo = ({ name, projectShow }) => {
  const TODOS = useSelector((state) => state.Todo);

  const dispatch = useDispatch();

  // Priority
  const handlePriorityClose = () => dispatch(priorityModalClose());

  useEffect(() => {
    dispatch(getTodos());
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
      <PriorityStatus
        priorityModalOpen={priorityModalOpen}
        handlePriorityClose={handlePriorityClose}
      />
    </>
  );
};

export default MainTodo;
