import React from "react";
import Header from "./veiw/components/Header";
import Home from "./veiw/pages/Home";
import conversationData from "./model/data/conversationData.json";
import blogsData from "./model/data/blogsData.json";
import softwareleague from "./model/data/softwareleague.json";
import problemSolving from "./model/data/problemSolving.json";
import eduContent from "./model/data/eduContent.json";
import FV from "./model/data/FV.json";
import MVPData from "./model/data/MVP.json";
import careers from "./model/data/career.json";
import news from "./model/data/News.json";
import newFeature from "./model/data/newFeature.json";
import events from "./model/data/events.json";
import ContentRenderer from "./veiw/components/ContentRenderer";
import Layout from "./veiw/components/Layout";
import AppFeatures from "./veiw/components/AppFeature";
import { Link } from "react-router-dom";
import CareerPage from "./veiw/pages/CareerPage";
import NewsPage from "./veiw/pages/NewsPage";
import NextFeaturesPage from "./veiw/pages/NextFeaturesPage";

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
  {
    path: "blogs",
    element: (
      <Layout>
        <ContentRenderer data={blogsData}></ContentRenderer>
      </Layout>
    ),
  },
  {
    path: "software-league",
    element: (
      <Layout>
        <ContentRenderer data={softwareleague}></ContentRenderer>
      </Layout>
    ),
  },
  {
    path: "code",
    element: (
      <Layout>
        <ContentRenderer data={problemSolving}></ContentRenderer>
      </Layout>
    ),
  },
  {
    path: "events",
    element: (
      <Layout>
        <ContentRenderer data={events}></ContentRenderer>
      </Layout>
    ),
  },
  {
    path: "learning",
    element: (
      <Layout>
        <ContentRenderer data={eduContent}></ContentRenderer>
      </Layout>
    ),
  },
  {
    path: "FV",
    element: (
      <Layout>
        <AppFeatures data={FV}></AppFeatures>
      </Layout>
    ),
  },
  {
    path: "MVP",
    element: (
      <Layout>
        <AppFeatures data={MVPData}></AppFeatures>
      </Layout>
    ),
  },
  {
    path: "career",
    element: (
      <Layout>
        <CareerPage data={careers?.career_page}></CareerPage>
      </Layout>
    ),
  },
  {
    path: "news",
    element: (
      <Layout>
        <NewsPage data={news?.news_page}></NewsPage>
      </Layout>
    ),
  },
  {
    path: "next-features",
    element: (
      <Layout>
        <NextFeaturesPage data={newFeature?.next_features}></NextFeaturesPage>
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <h1>page not found</h1>{" "}
        <p>
          check your url or go to <Link to={"/"}>home</Link>
        </p>
      </Layout>
    ),
  },
];
