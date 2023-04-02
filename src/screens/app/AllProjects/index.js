import { Box } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProjectCard, Loader, Empty } from "../../../components";
import { ProjectDetails } from "../../../components/Modals";
import { activeForm, todoModalOpen } from "../../../store/actions/modal";
import "./styles.css";

const AllProjects = () => {
  const PROJECTS = useSelector((state) => state.Project);
  const dispatch = useDispatch();
  return (
    <>
      {PROJECTS?.loading ? (
        <Loader />
      ) : (
        <>
          {PROJECTS?.projects?.length === 0 ? (
            <Empty
              title={"Project"}
              description={"Create a new Project."}
              onClick={() => {
                dispatch(todoModalOpen());
                dispatch(activeForm("project"));
              }}
              buttonText={"Create Project"}
            />
          ) : (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                overflowY: "auto",
              }}
            >
              {PROJECTS?.projects?.map((data, index) => (
                <ProjectCard key={index} data={data} projectShow={false} />
              ))}
            </Box>
          )}
        </>
      )}

      {/* Details Modal */}
      <ProjectDetails />
    </>
  );
};

export default AllProjects;
