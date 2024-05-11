import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./css/default/GlobalStyle";
import Cloud from "./css/default/Cloud";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Cloud />
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
  // </React.StrictMode>
);
