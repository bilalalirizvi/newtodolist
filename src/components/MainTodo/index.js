import React, { useEffect, useState } from "react";
import {
  Empty,
  Loader,
  SelectBox,
  TextFieldSearch,
  TodoCard,
} from "../../components";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { DetailsModal, PriorityStatus } from "../../components/Modals";
import { getTodos } from "../../store/actions/todo";
import { getNote } from "../../store/actions/note";
import { activeForm, todoModalOpen } from "../../store/actions/modal";
import { useSearch } from "../../hooks";
import NotFoundItem from "../../constants/NotFouncItem";

const MainTodo = ({ name, projectShow }) => {
  const TODOS = useSelector((state) => state.Todo);
  const NOTES = useSelector((state) => state.Note);

  const [search, setSearch] = useState("");

  const [filtered] = useSearch({ value: search, data: TODOS[name] });

  const [filterBy, setFilterBy] = useState("View All");

  const dispatch = useDispatch();

  useEffect(() => {
    if (TODOS.todos.length === 0) dispatch(getTodos());
    if (NOTES.notes.length === 0) dispatch(getNote());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {TODOS.todos.length === 0 ? (
            <Empty
              title={"Todo"}
              description={"Create a new Todo."}
              onClick={() => {
                dispatch(todoModalOpen());
                dispatch(activeForm("todo"));
              }}
              buttonText={"Create Todo"}
            />
          ) : (
            <>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  overflowY: "auto",
                  paddingBottom: "30px",
                }}
              >
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
                {filteredTodo().length === 0 ? (
                  <NotFoundItem />
                ) : (
                  <>
                    {filteredTodo()?.map((data, index) => (
                      <TodoCard
                        key={index}
                        data={data}
                        projectShow={projectShow}
                      />
                    ))}
                  </>
                )}
              </Box>
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

export default MainTodo;
