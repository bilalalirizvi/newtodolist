import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Layout, Notes, AllProjects, Today, Week } from "../screens/app";
import Project from "../screens/app/AllProjects/Project";
import { Login, Signup, ForgotPassword } from "../screens/auth";
import { AppRoutes, AuthRoutes } from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppRoutes>
        <Layout />
      </AppRoutes>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "today",
        element: <Today />,
      },
      {
        path: "week",
        element: <Week />,
      },
      {
        path: "projects",
        element: <AllProjects />,
      },
      {
        path: "projects/:title/:projectId",
        element: <Project />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthRoutes>
        <Login />
      </AuthRoutes>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthRoutes>
        <Signup />
      </AuthRoutes>
    ),
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
]);

const Routing = () => {
  // const user = localStorage.getItem("userId");

  return <RouterProvider router={router} />;
};

export default Routing;
