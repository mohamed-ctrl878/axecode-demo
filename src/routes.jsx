import React from "react";
import Header from "./veiw/components/header";
import Home from "./veiw/pages/Home";

export const routes = () => [
  {
    path: "/",
    element: <Home></Home>,
  }
];
