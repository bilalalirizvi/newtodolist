import React, { useEffect, useState } from "react";
import { Loader, TodoCard } from "../../../components";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { DetailsModal, PriorityStatus } from "../../../components/Modals";
import { getTodos } from "../../../store/actions/todo";
import { useNavigate, useParams } from "react-router-dom";
import { getNote } from "../../../store/actions/note";
import swal from "sweetalert";
import {
  deleteAllProjectTodo,
  deleteProject,
} from "../../../store/actions/project";

const Project = () => {
  const { title, projectId } = useParams();
  const TODOS = useSelector((state) => state.Todo);
  const [filtered, setFiltered] = useState([]);
  const NOTES = useSelector((state) => state.Note);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (TODOS.todos.length === 0) dispatch(getTodos());
    if (NOTES.notes.length === 0) dispatch(getNote());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filteredData = TODOS?.todos?.filter((v) => v?.type === title);
    setFiltered(filteredData);
  }, [TODOS?.todos, title]);

  // Function
  const deleteProjectFn = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(
          deleteProject({
            docId: projectId,
            navigate: navigate,
          })
        );

        swal("", "Deleted successfully", "success");
      }
    });
  };

  const deleteAllProjectTodoFn = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(
          deleteAllProjectTodo({
            docId: projectId,
            navigate: navigate,
          })
        );
        swal("", "Deleted successfully", "success");
      }
    });
  };

  // Component
  const EmptyProject = () => {
    return (
      <Stack alignItems={"center"} spacing={2}>
        <Typography variant="h6">Empty Project!</Typography>
        <Typography variant="h5">
          Create a new to-do item or delete project.
        </Typography>
        <Box>
          <Button variant="outlined" color="error" onClick={deleteProjectFn}>
            Delete Project
          </Button>
        </Box>
      </Stack>
    );
  };

  const DeleteProject = () => {
    return (
      <Stack mt={5} spacing={0}>
        <Typography sx={{ fontWeight: "bold" }}>
          Delete this Project!
        </Typography>
        <Typography sx={{ fontSize: "15px" }}>
          Once you delete a project, there is no going back. Please be certain.
        </Typography>
        <Box mt={1}>
          <Button
            variant="outlined"
            color="error"
            onClick={deleteAllProjectTodoFn}
          >
            Delete Project
          </Button>
        </Box>
      </Stack>
    );
  };

  return (
    <>
      {TODOS?.loading ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h5" mb={2} sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          {filtered.length === 0 ? (
            <EmptyProject />
          ) : (
            <>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  overflowY: "auto",
                }}
              >
                {filtered?.map((data, index) => (
                  <TodoCard key={index} data={data} projectShow={false} />
                ))}
              </Box>
              <DeleteProject />
            </>
          )}
        </>
      )}
      {/* Priority Modal */}
      <PriorityStatus />

      {/* Details Modal */}
      <DetailsModal />
    </>
  );
};

export default Project;
