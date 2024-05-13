import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Main />,
  },
]);

export default router;
