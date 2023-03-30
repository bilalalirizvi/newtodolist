import React, { useEffect } from "react";
import "./styles.css";
import { TodoCard } from "../../../components";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../../store/actions/todo";
import { PriorityStatus } from "../../../components/Modals";
import {
  priorityModalClose,
  priorityModalOpen,
} from "../../../store/actions/modal";

const Dashboard = () => {
  const TODOS = useSelector((state) => state.Todo);

  const dispatch = useDispatch();

  // Priority
  const handlePriorityClose = () => dispatch(priorityModalClose());

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      {TODOS?.todos ? (
        <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {TODOS?.todos?.map((data, index) => (
            <TodoCard key={index} data={data} projectShow={true} />
          ))}
        </Box>
      ) : (
        "Loading"
      )}
      {/* Priority Modal */}
      <PriorityStatus
        priorityModalOpen={priorityModalOpen}
        handlePriorityClose={handlePriorityClose}
      />
    </>
  );
};

export default Dashboard;
