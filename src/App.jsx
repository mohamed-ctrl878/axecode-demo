import { Fragment, useEffect } from "react";

import {
  BrowserRouter,
  useLocation,
  useNavigate,
  useNavigation,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import Header from "./veiw/components/Header";
import Footer from "./veiw/components/Footer";
import ScrollToTop from "./veiw/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

const SetRoute = () => useRoutes(routes());

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Analytics />
        <ScrollToTop></ScrollToTop>
        <Header></Header>
        <SetRoute />
        <Footer></Footer>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
