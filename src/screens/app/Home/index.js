import { Typography } from "@mui/material";
import { MainTodo } from "../../../components";

const Home = () => {
  return (
    <>
      <Typography variant="h5" mb={2} sx={{ fontWeight: "bold" }}>
        All Todos
      </Typography>
      <MainTodo name={"todos"} projectShow={true} />
    </>
  );
};

export default Home;
