import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FullPageLoading } from "../../components";

const AppRoutes = ({ children }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

  return children;
};

export default AppRoutes;
