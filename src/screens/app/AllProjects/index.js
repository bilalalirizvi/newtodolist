import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ProjectCard, Loader } from "../../../components";
import { ProjectDetails } from "../../../components/Modals";
import "./styles.css";

const AllProjects = () => {
  const PROJECTS = useSelector((state) => state.Project);
  return (
    <>
      {PROJECTS?.loading ? (
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
          {PROJECTS?.projects?.map((data, index) => (
            <ProjectCard key={index} data={data} projectShow={false} />
          ))}
        </Box>
      )}

      {/* Details Modal */}
      <ProjectDetails />
    </>
  );
};

export default AllProjects;
