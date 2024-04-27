import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home/index.jsx";
import SignInPage from "./pages/SignIn/index.jsx";
import SignUpPage from "./pages/SignUp/index.jsx";
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
      { path: "/login", element: <SignInPage /> },
      { path: "/cadastrar", element: <SignUpPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
