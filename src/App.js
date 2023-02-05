import React, { useState, Suspense, startTransition, lazy } from "react";
import "./App.css";

import { Layout } from "./components/Layout";

import Page1 from "./components/Page1";
//dynamic import(), works outside of Create-react-app too
const Page2 = lazy(() => import("./components/Page2"));
const Page3 = lazy(() => import("./components/Page3"));

function App() {
  const [route, setRoute] = useState("page1");

  const onRouteChange = (newRoute) => {
    startTransition(() => {
      //allows to not show the fallback transition of <Suspense/>
      setRoute(newRoute);
    });
  };

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        {route === "page1" && <Page1 onRouteChange={onRouteChange} />}
        {route === "page2" && <Page2 onRouteChange={onRouteChange} />}
        {route === "page3" && <Page3 onRouteChange={onRouteChange} />}
      </Suspense>
    </Layout>
  );
}

export default App;
