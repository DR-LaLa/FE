import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Setting from "./pages/Setting";
import Quiz from "./pages/Quiz";
import QuizPlay from "./components/quiz/QuizPlay";

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
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/playquiz",
    element: <QuizPlay />,
  },
]);

export default router;
