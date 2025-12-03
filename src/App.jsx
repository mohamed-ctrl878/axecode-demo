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
import Header from "./veiw/components/header";
import Footer from "./veiw/components/footer";
import ScrollToTop from "./veiw/components/ScrollToTop";

const SetRoute = () => useRoutes(routes());

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Header></Header>
        <SetRoute />
        <Footer></Footer>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
