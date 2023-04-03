import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoutes = ({ children }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, [navigate, user]);

  return children;
};

export default AuthRoutes;
