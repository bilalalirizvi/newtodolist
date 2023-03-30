import { CircularProgress } from "@mui/material";

const Progress = ({ color }) => {
  return <CircularProgress style={{ color: color || "#fff" }} size={20} />;
};

export default Progress;
