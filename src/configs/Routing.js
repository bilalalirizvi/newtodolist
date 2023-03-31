import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Layout, Notes, Projects, Today, Week } from "../screens/app";
import { Login, Signup, ForgotPassword } from "../screens/auth";
import AppRoutes from "./ProtectedRoute/AppRoutes";

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
        element: <Projects />,
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
      <AppRoutes>
        <Login />
      </AppRoutes>
    ),
  },
  {
    path: "/signup",
    element: (
      <AppRoutes>
        <Signup />
      </AppRoutes>
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
