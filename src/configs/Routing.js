import { useEffect } from "react";
import { auth, db, storage } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
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
import { useDispatch } from "react-redux";
import { currentUserFailed, currentUserSuccess } from "../store/actions/auth";

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
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        (async () => {
          try {
            // Get Image from store
            const pathReference = ref(storage, `images/${user.uid}`);
            const url = await getDownloadURL(pathReference);

            // Get user for firstore
            const q = query(
              collection(db, "users"),
              where("uid", "==", user.uid)
            );
            const querySnapshot = await getDocs(q);
            let _user = {};
            querySnapshot.forEach((doc) => {
              _user = { ...doc.data(), docId: doc.id, photoUrl: url };
            });
            dispatch(currentUserSuccess(_user));
          } catch ({ message }) {
            if (message.includes("does not exist"))
              console.error("Image does not exist");
          }
        })();
      } else {
        dispatch(currentUserFailed());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RouterProvider router={router} />;
};

export default Routing;
