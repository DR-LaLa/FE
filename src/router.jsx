import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Setting from "./pages/Setting";
import Quiz from "./pages/Quiz";
import QuizPlay from "./components/quiz/QuizPlay";
import Rank from "./pages/Rank";
import Album from "./pages/Album";
import Search from "./pages/Search";
import Explanation from "./components/quiz/Explanation";
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
  {
    path: "/rank",
    element: <Rank />,
  },
  {
    path: "/album",
    element: <Album />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/explanation",
    element: <Explanation />,
  },
]);

export default router;
