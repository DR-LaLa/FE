import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Setting from "./pages/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
]);

export default router;
