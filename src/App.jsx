import { Fragment } from "react";

import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import Header from "./veiw/components/header";

const SetRoute = () => useRoutes(routes());

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header></Header>
        <SetRoute />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
