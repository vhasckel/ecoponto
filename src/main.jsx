import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home/index.jsx";
<<<<<<< HEAD
import LoginPage from "./pages/SignUp/index.jsx";
=======
import LoginPage from "./pages/Login/index.jsx";
>>>>>>> develop
import App from "./App.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
