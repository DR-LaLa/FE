import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./css/default/GlobalStyle";
import Cloud from "./css/default/Cloud";
import IsLoginProvider from "./provider/IsLoginProvider";
import QuizDescriptionProvider from "./provider/QuizDescriptionProvider";
import AnimationProvider from "./provider/AnimationProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Cloud />
    <GlobalStyle />
    <IsLoginProvider>
      <QuizDescriptionProvider>
        <AnimationProvider>
          <RouterProvider router={router} />
        </AnimationProvider>
      </QuizDescriptionProvider>
    </IsLoginProvider>
  </>
  // </React.StrictMode>
);
