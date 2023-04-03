import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppRoutes = ({ children }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return children;
};

export default AppRoutes;
