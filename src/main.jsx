import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ComidaProvider } from "./context/ComidaProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ComidaProvider>
      <RouterProvider router={router} />
    </ComidaProvider>
  </React.StrictMode>
);
