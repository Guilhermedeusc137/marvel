import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout";

import { Loading } from "./screens";

const Home = lazy(() => import("./screens/Home"));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default Router;
