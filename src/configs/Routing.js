import { useEffect } from "react";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Layout,
  Notes,
  AllProjects,
  Today,
  Week,
  Settings,
} from "../screens/app";
import Project from "../screens/app/AllProjects/Project";
import { Login, Signup, ForgotPassword } from "../screens/auth";
import { AppRoutes, AuthRoutes } from "./ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { currentUserFailed, currentUserSuccess } from "../store/actions/auth";
// import { switchTheme } from "../store/actions/theme";

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
      {
        path: "settings",
        element: <Settings />,
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
  const COLORS = useSelector((state) => state.Theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        (async () => {
          try {
            // Get user for firstore
            const q = query(
              collection(db, "users"),
              where("uid", "==", user.uid)
            );
            const querySnapshot = await getDocs(q);
            let _user = {};
            querySnapshot.forEach((doc) => {
              _user = {
                ...doc.data(),
                docId: doc.id,
              };
            });
            localStorage.setItem("userId", _user.uid);
            localStorage.setItem("name", _user.displayName);
            localStorage.setItem("docId", _user.docId);
            localStorage.setItem("email", _user.email);
            dispatch(currentUserSuccess(_user));
          } catch ({ message }) {
            console.error(message);
          }
        })();
      } else {
        dispatch(currentUserFailed());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onAuthStateChanged]);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    // background-color: #f4f4f6 !important;

    if (theme === "dark") {
      document.body.style.backgroundColor = COLORS.background;
      dispatch({ type: "THEME_DARK" });
    } else {
      document.body.style.backgroundColor = COLORS.background;
      dispatch({ type: "THEME_LIGHT" });
    }
  }, [dispatch, COLORS]);

  return <RouterProvider router={router} />;
};

export default Routing;
