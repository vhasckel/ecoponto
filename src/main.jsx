import React, { useEffect, useState } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { LocationContextProvider } from "./context/LocationContext.jsx";
import { CoordinateProvider } from "./context/CoordinatesContext.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";

import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home/index.jsx";
import SignInPage from "./pages/SignIn/index.jsx";
import SignUpPage from "./pages/SignUp/index.jsx";
import LocationRegistration from "./pages/LocationRegistration/index.jsx";
import LocationPage from "./pages/LocationList/index.jsx";
import App from "./App.jsx";

import "./index.css";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  // Atualizar o estado quando `localStorage` muda
  useEffect(() => {
    const handleStorageChange = () => {
      const auth = JSON.parse(localStorage.getItem("isAuthenticated"));
      setIsAuthenticated(auth);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  { path: "/login", element: <SignInPage /> },
  { path: "/cadastrar", element: <SignUpPage /> },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cadastrar-localizacao",
        element: <LocationRegistration />,
      },
      {
        path: "/editar-localização/:id",
        element: <LocationRegistration />,
      },
      {
        path: "/lista-de-localizacoes",
        element: <LocationPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CoordinateProvider>
    <LocationContextProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </LocationContextProvider>
  </CoordinateProvider>
);
