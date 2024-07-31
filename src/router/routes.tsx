import { createBrowserRouter } from "react-router-dom";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "@/pages/Profile";
import Logout from "@/pages/Logout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);
