import React, { useEffect, useState } from "react";
import {
  Empty,
  Loader,
  SelectBox,
  TextFieldSearch,
  TodoCard,
} from "../../../components";
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
import { activeForm, todoModalOpen } from "../../../store/actions/modal";
import { useSearch } from "../../../hooks";
import NotFoundItem from "../../../constants/NotFouncItem";

const Project = () => {
  const { title, projectId } = useParams();
  const TODOS = useSelector((state) => state.Todo);
  const NOTES = useSelector((state) => state.Note);

  const [search, setSearch] = useState("");

  const [filtered] = useSearch({
    value: search,
    data: TODOS?.todos?.filter((v) => v?.type === title),
  });

  const [filterBy, setFilterBy] = useState("View All");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (TODOS.todos.length === 0) dispatch(getTodos());
    if (NOTES.notes.length === 0) dispatch(getNote());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const DeleteProject = () => {
    return (
      <Stack mt={5} pb={3} spacing={0}>
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

  const handleSelect = (value) => {
    setFilterBy(value);
  };

  const filteredTodo = () => {
    switch (filterBy[0]) {
      case "View All": {
        return filtered;
      }
      case "Complete": {
        return filtered?.filter((v) => v.isCompleted === true);
      }
      case "Incomplete": {
        return filtered?.filter((v) => v.isCompleted === false);
      }
      case "Low Priority": {
        return filtered?.filter((v) => v.priority === "low");
      }
      case "Medium Priority": {
        return filtered?.filter((v) => v.priority === "medium");
      }
      case "High Priority": {
        return filtered?.filter((v) => v.priority === "high");
      }
      default:
        return filtered;
    }
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
          <Box
            mb={2}
            marginY={1}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "20px",
            }}
          >
            <TextFieldSearch
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SelectBox
              handleSelect={handleSelect}
              length={filteredTodo().length}
            />
          </Box>
          {TODOS?.todos?.length === 0 ? (
            <Empty
              title={"Todo"}
              description={"Create a new Todo."}
              onClick={() => {
                dispatch(todoModalOpen());
                dispatch(activeForm("todo"));
              }}
              buttonText={"Create Todo"}
              isDelete={true}
              handleDelete={deleteProjectFn}
            />
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
                {filteredTodo()?.length === 0 ? (
                  <NotFoundItem />
                ) : (
                  <>
                    {filteredTodo()?.map((data, index) => (
                      <TodoCard key={index} data={data} projectShow={false} />
                    ))}
                  </>
                )}
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
