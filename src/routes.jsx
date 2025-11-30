import React from "react";
import Header from "./veiw/components/header";
import Home from "./veiw/pages/Home";
import Feature from "./veiw/components/Feature";
import ChatData from "./model/data/FV.json";

export const routes = () => [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "chat",
    element: <Feature data={ChatData}></Feature>,
  },
];
