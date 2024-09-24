import React from "react";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import Header from "./Header.tsx";
import Home from "./Home.tsx";

import { AuthProvider } from "../contexts/authContext/index.js";
import { useRoutes, RouteObject } from "react-router-dom";

const App: React.FC = () => {
  const routesArray: RouteObject[] = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];

  const routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
};

export default App;
