import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { MainTodo } from "../../../components";

const Home = () => {
  const TODOS = useSelector((state) => state.Todo);
  return (
    <>
      {TODOS.todos.length !== 0 && (
        <Typography variant="h5" mb={2} sx={{ fontWeight: "bold" }}>
          All Todos
        </Typography>
      )}
      <MainTodo name={"todos"} projectShow={true} />
    </>
  );
};

export default Home;
