import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import SignUp from "./pages/Public/SignUp.jsx";
import Menu from "./pages/Public/Menu.jsx";
import Cart from "./pages/Public/Cart.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import AuthGuard from "./_helpers/AuthGuard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <App />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "dashboard",
        element: (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
