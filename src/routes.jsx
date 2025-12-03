import React from "react";
import Header from "./veiw/components/header";
import Home from "./veiw/pages/Home";
import Feature from "./veiw/components/Feature";
import conversationData from "./model/data/conversationData.json";
import ContentRenderer from "./veiw/components/ContentRenderer";
import Layout from "./veiw/components/Layout";

export const routes = () => [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "chat",
    element: (
      <Layout>
        <ContentRenderer data={conversationData}></ContentRenderer>
      </Layout>
    ),
  },
];
