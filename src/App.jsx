import { Fragment } from "react";

import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import Header from "./veiw/components/header";
import Footer from "./veiw/components/footer";

const SetRoute = () => useRoutes(routes());

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header></Header>
        <SetRoute />
        <Footer></Footer>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
