import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./css/default/GlobalStyle";
import Cloud from "./css/default/Cloud";
import IsLoginProvider from "./provider/IsLoginProvider";
import QuizDescriptionProvider from "./provider/QuizDescriptionProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Cloud />
    <GlobalStyle />
    <IsLoginProvider>
      <QuizDescriptionProvider>
        <RouterProvider router={router} />
      </QuizDescriptionProvider>
    </IsLoginProvider>
  </>
  // </React.StrictMode>
);
